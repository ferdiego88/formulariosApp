import { Injectable } from '@angular/core';
import { FormControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {
  nombreApellidoPatern = '([a-zA-Z]+) ([a-zA-Z]+)';
  emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  noPuedeSerFerdiego (control: FormControl): ValidationErrors | null {
    const valor = control.value?.trim().toLowerCase();
    console.log(valor);
    if (valor === 'ferdiego') {
      return {
        noFerdiego: true
      }
    }
    return null;
  }

  constructor() { }
}
