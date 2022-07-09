import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent implements OnInit {

  @ViewChild('formProducto') formProducto!: NgForm;

  constructor() { }

  ngOnInit(): void {
  }

  guardar(){
    console.log(this.formProducto);

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
