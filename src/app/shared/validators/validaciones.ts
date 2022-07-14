import { FormControl } from "@angular/forms";

export const nombreApellidoPatern = '([a-zA-Z]+) ([a-zA-Z]+)';
export const emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

export const noPuedeSerFerdiego = (control: FormControl) => {
  const valor = control.value?.trim().toLowerCase();
  console.log(valor);
  if (valor === 'ferdiego') {
    return {
      noFerdiego: true
    }
  }
  return null;
}
