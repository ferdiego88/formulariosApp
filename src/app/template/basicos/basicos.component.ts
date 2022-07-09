import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent implements OnInit {

  @ViewChild('formProducto') formProducto!: NgForm;

  initForm = {
    producto: 'RTX 3080',
    precio: 10,
    existencias: 10
  }
  constructor() { }

  ngOnInit(): void {
  }

  guardar(){
    console.log('Posteo Correcto');
    this.formProducto.resetForm({
      producto: 'Ingrese descripción',
      precio: 0,
      existencias: 0
    });
  }

  nombreValido(): boolean {
    return this.formProducto?.controls['producto']?.invalid &&
          this.formProducto?.controls['producto']?.touched
  }

  precioValido(): boolean {
    return this.formProducto?.controls['precio']?.invalid &&
          this.formProducto?.controls['precio']?.touched
  }
}
