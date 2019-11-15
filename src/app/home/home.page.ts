import { Component } from '@angular/core';
import { Libro } from '../model/Libro';
import { LibroService } from '../services/libro.service';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { LIBROS } from '../model/mock-libros';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  libro: Libro ;
  libros: Libro[] ;
    constructor(private router: Router, private ps: LibroService, private modalCtrl: ModalController) {
    }

    ngOnInit(): void {
      this.getListadoLibros();
    }


    navegar(path: string, id: number): void{
        this.router.navigate([path, id] );
    }

    getListadoLibros() {
      return this.ps.getLibros().subscribe(
        (res: any) => {
          console.log(res);
          this.libros = res.data;
        }
        );
    }

  getLibroPorId(id: number){
   
 
 }

  addLibro(p: Libro) {
    
  }

  updateLibro(l: Libro) {
    
  }

  deleteLibro(id: number) {
    this.ps.deleteLibro(id).subscribe(
      resp => {
        return this.libros.push(resp);
      }
    );
    let indice = 0;
    let contador = 0;
    for (let l of this.libros) {
      if ( l.id === id) {
        indice = contador;
      }
      contador++;
    }
    this.libros.splice(indice, 1);
  }

}
