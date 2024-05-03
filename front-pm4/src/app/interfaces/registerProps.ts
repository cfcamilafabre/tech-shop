export interface IRegisterProps {
        name: string;
        birthdate: string;
        nDni: any;
        email: string;
        password: string;
        confirmPassword: string;
}

export interface IRegisterErrorProps {
    name?: string;
    birthdate?: string;
    nDni?: any;
    email?: string;
    password?: string;
    confirmPassword?: string;
}