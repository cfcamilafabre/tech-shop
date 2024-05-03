import { ILoginErrorProps, ILoginProps } from "@/app/interfaces/loginProps";

const emailRegex:RegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i;

export function validateLoginForm(values: ILoginProps): ILoginErrorProps {
    let errors: ILoginErrorProps= {};
    if(!values.email){
        errors.email = "El email es requerido"
    } else if (!emailRegex.test(values.email)) {
        errors.email= "El email no es válido"
    } else if (!values.password) {
        errors.password = "La contraseña es requerida"
    }

    return errors;
}