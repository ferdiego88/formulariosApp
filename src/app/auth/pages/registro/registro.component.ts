import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorService } from '../../../shared/validators/validator.service';
import { EmailValidatorService } from '../../../shared/validators/email-validator.service';



@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    nombre: ['',[Validators.required,Validators.pattern(this.validatorService.nombreApellidoPatern)]],
    email: ['',[Validators.required,Validators.pattern(this.validatorService.emailPattern)],[this.emailValidator]],
    usuario: ['',[Validators.required,this.validatorService.noPuedeSerFerdiego],],
    password: ['',[Validators.required, Validators.minLength(6)]],
    password2: ['',[Validators.required]]
  },{
    validators: [this.validatorService.camposIguales('password','password2')]
  })


  get emailErrorMsg():string {
    const errors = this.miFormulario.get('email')?.errors;
    if (errors?.['required']) {
        return 'Correo electrónico es obligatorio';
    } else if(errors?.['pattern']) {
      return 'El formato de correo electrónico es inválido'
    } else if(errors?.['emailTomado']) {
      return 'El email ingresado esta siendo utilizado'
    }
    return '';
  }
  constructor(private fb: FormBuilder,
              private validatorService: ValidatorService,
              private emailValidator: EmailValidatorService) { }

  ngOnInit(): void {

    this.miFormulario.reset({
      nombre: 'Fernando Herrera',
      email: 'test1@test.com'
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

  // emailRequired(){
  //   return this.miFormulario.get('email')?.touched &&
  //      this.miFormulario.get('email')?.errors?.['required'];
  // }


  // formatoEmail(){
  //   return this.miFormulario.get('email')?.touched &&
  //      this.miFormulario.get('email')?.errors?.['pattern'];
  // }

  // emailTomado(){
  //   return this.miFormulario.get('email')?.touched &&
  //      this.miFormulario.get('email')?.errors?.['emailTomado'];
  // }

}
