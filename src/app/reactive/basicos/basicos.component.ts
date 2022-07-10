import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent  {

  // miFormulario: FormGroup = new FormGroup({
  //   nombre      : new FormControl('Rtx 4080ti'),
  //   precio      : new FormControl(250),
  //   existencias : new FormControl(70)
  // })

  miFormulario: FormGroup = this.formBuilder.group({
      nombre: ['Rtx 4080ti',[Validators.required,Validators.minLength(3)],],
      precio: [250,[Validators.required,Validators.min(0)]],
      existencias: [70,[Validators.required,Validators.min(0)]],
  })

  constructor(private formBuilder: FormBuilder) { }


  guardar() {
    console.log('Submit Hecho');

  }

}
