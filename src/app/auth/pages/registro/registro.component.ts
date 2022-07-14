import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorService } from '../../../shared/validators/validator.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    nombre: ['',[Validators.required,Validators.pattern(this.validatorService.nombreApellidoPatern)]],
    email: ['',[Validators.required,Validators.pattern(this.validatorService.emailPattern)]],
    usuario: ['',[Validators.required,this.validatorService.noPuedeSerFerdiego],],
    password: ['',[Validators.required, Validators.minLength(6)]],
    password2: ['',[Validators.required]]
  },{
    validators: [this.validatorService.camposIguales('password','password2')]
  })

  constructor(private fb: FormBuilder,
              private validatorService: ValidatorService) { }

  ngOnInit(): void {

    this.miFormulario.reset({
      nombre: 'Fernando Herrera',
      email: 'fernandoherrera@gmail.com'
    })
  }

  campoNoValido(campo: string){
    return this.miFormulario.get(campo)?.invalid
            && this.miFormulario.get(campo)?.touched;
  }

  guardar() {
    console.log(this.miFormulario.value);

    this.miFormulario.markAllAsTouched();
  }
}
