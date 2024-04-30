export const validate = (input:any) => {
    const errors:any = [];
    const emailRegex:RegExp = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

    if(!emailRegex.test(input.username)){
        errors.username = "El email no es valido"
    }

    return errors;

}