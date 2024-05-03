import { IRegisterProps, IRegisterErrorProps } from "@/app/interfaces/registerProps";

export const validate = (values: IRegisterProps): IRegisterErrorProps => {
    let errors:any = [];
    const emailRegex:RegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i;
    const passwordRegex:RegExp = /^(?=.*[A-Z])(?=.*[0-9]).{6,}$/i;


    if(!emailRegex.test(values.email)){
        errors.email = "El email no es válido"
    }

    if(!passwordRegex.test(values.password)) {
        errors.password = "La contraseña debe tener un minimo de 6 caracteres, una mayuscula y un numero"
        }
    

    if(!values.name) {
        errors.name = "El campo es requerido"
        }
    

    if(!values.birthdate) {
        errors.birthdate = "El campo es obligatorio"
        }
    

    if(!values.nDni) {
        errors.nDni = "El campo es obligatorio"
        }
    
    return errors;

}

