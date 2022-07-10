import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent implements OnInit  {

  // miFormulario: FormGroup = new FormGroup({
  //   nombre      : new FormControl('Rtx 4080ti'),
  //   precio      : new FormControl(250),
  //   existencias : new FormControl(70)
  // })

  miFormulario: FormGroup = this.formBuilder.group({
      nombre: [,[Validators.required,Validators.minLength(3)],],
      precio: [,[Validators.required,Validators.min(0)]],
      existencias: [,[Validators.required,Validators.min(0)]],
  })

  constructor(private formBuilder: FormBuilder) { }


  ngOnInit(): void {
      this.miFormulario.reset({
        nombre: 'RTX 4080ti',
        precio: 1600
      })
  }

  campoEsValido(campo: string){
    return this.miFormulario.controls[campo].errors && this.miFormulario.controls[campo].touched;
  }

  guardar() {
    if (this.miFormulario.invalid) {
        this.miFormulario.markAllAsTouched();
        return;
    }
    console.log(this.miFormulario.value);
    this.miFormulario.reset();
  }


}
