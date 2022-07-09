import { Component, OnInit } from '@angular/core';

interface Persona {
  nombre: string;
  favoritos: Favorito[];
}

interface Favorito {
  id: number;
  nombre: string;
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styleUrls: ['./dinamicos.component.css']
})
export class DinamicosComponent   {

 nuevoJuego:string = '';
  persona: Persona = {
    nombre: 'Fernando',
    favoritos: [
      {id: 1, nombre: 'Metal Gear'},
      {id: 2, nombre: 'Blody Roar'},
    ]
  }

  guardar(){
    console.log('formulario posteado');

  }

  eliminar(index: number){
    this.persona.favoritos.splice(index,1);
  }

  agregar(){
    let newId: number =Math.floor(Math.random()*100);
    const newFavorito: Favorito = {
      id: newId,
      nombre: this.nuevoJuego
    };

    this.persona.favoritos.push(newFavorito);
    this.nuevoJuego = '';
  }
}
