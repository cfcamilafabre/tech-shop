export const validate = (input:any, initialErrors:any) => {
    let errors:any = [];
    const emailRegex:RegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i;
    const passwordRegex:RegExp = /^(?=.*[A-Z])(?=.*[0-9]).{6,}$/i;


    if(!emailRegex.test(input.email)){
        errors = {
            ...initialErrors, 
            email:"Ingresa un email válido"
        }
    }

    if(!passwordRegex.test(input.password)) {
        errors = {
            ...initialErrors,
            password:"La contraseña debe tener un minimo de 6 caracteres, una mayuscula y un numero"
        }
    }

    if(!input.name) {
        errors = {
            ...initialErrors,
            name: "El campo es obligatorio"
        }
    }

    if(!input.birthdate) {
        errors = {
            ...initialErrors,
            birthdate: "El campo es obligatorio"
        }
    }

    if(!input.nDni) {
        errors = {
            ...initialErrors,
            nDni: "El campo es obligatorio"
        }
    }
    
    
    return errors;

}