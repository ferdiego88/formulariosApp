import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styleUrls: ['./dinamicos.component.css']
})
export class DinamicosComponent {

  miFormulario: FormGroup = this.formBuilder.group({
    nombre: ['',[Validators.required, Validators.minLength(3)]],
    favoritos: this.formBuilder.array([
      ['Metal Gear'],
      ['Death Stranding'],
    ],Validators.required)
  })

  nuevoFavorito: FormControl = this.formBuilder.control('',[Validators.required])

  get favoritosArr (){
    return this.miFormulario.get('favoritos') as FormArray;
  }

  constructor(private formBuilder: FormBuilder) { }

  campoEsValido(campo: string){
    return this.miFormulario.controls[campo].errors &&
           this.miFormulario.controls[campo].touched
  }

  agregarFavorito(){
    if (this.nuevoFavorito.invalid) {
        return;
    }
    this.favoritosArr.push(new FormControl(this.nuevoFavorito.value));
    this.nuevoFavorito.reset();
  }

  guardar(){
    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched();
      return;
    }
    console.log(this.miFormulario.value);
    //this.miFormulario.reset();
  }

  borrar(indice: number) {
    this.favoritosArr.removeAt(indice);
  }
}
