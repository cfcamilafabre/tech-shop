'use client';
//hooks
import { useState, useEffect } from "react";
import { useRouter} from "next/navigation";

//helpers
import { validate } from "@/helpers/validate";
//interfaces
import { IRegisterProps, IRegisterErrorProps } from "../interfaces/registerProps";

export const Register = () => {

    const router = useRouter();

    const initialState = {
        name: '',
        birthdate: '',
        nDni:'' ,
        email: '',
        password: '',
        confirmPassword: ''
    }

    const initialErrors = {
        name: 'El nombre es requerido',
        birthdate: 'La fecha es requerida',
        nDni: 'El DNI es requerido',
        email: 'El email es requerido',
        password: 'La contraseña es requerida',
        confirmPassword: 'La contraseña de confirmacion es requerida'
    }

    const [userData, setUserData] = useState<IRegisterProps>(initialState);

    const [errors, setErrors] = useState<IRegisterErrorProps>(initialErrors);

    const handleOnSubmit = (event:React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (userData.password !== userData.confirmPassword) {
            setErrors({ ...errors, confirmPassword: 'Las contraseñas no coinciden' });
            return;
        }
        router.push("/user")

    }

    const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        const { name, value} = event.target;

        setUserData({
            ...userData,
            [name]: value
        })
    }

    //validar errores cuando se actualiza el form
    useEffect(() => {
        const errors = validate(userData)
        setErrors(errors)

    }, [userData])
    

    return ( 
        <div className="flex m-5 p-1 flex-col justify-center items-center ">
                <h5 className="font-medium text-lg justify-center">Completá el formulario para registrarte</h5>
            <form onSubmit={handleOnSubmit} className="flex-col mt-4 justify-center w-1/3">
                <div >
                    <div className="my-4" >
                        <label>Nombre:</label>
                        <input type='text' value={userData.name} name='name' onChange={handleChange} className="my-1" />
                        {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
                    </div>
                    <div className="my-4">
                        <label>Fecha de nacimiento:</label>
                        <input type='text' value={userData.birthdate} name='birthdate'  onChange={handleChange} className="my-1"  />
                        {errors.birthdate && <p style={{ color: 'red' }}>{errors.birthdate}</p>}
                        
                    </div>
                    <div className="my-4">
                        <label>Numero de DNI:</label>
                        <input type='number' value={userData.nDni} name='nDni'  onChange={handleChange} className="my-1"  />
                        {errors.nDni && <p style={{ color: 'red' }}>{errors.nDni}</p>}
                        
                    </div>
                    <div className="my-4">
                        <label>Email:</label>
                        <input type='text' value={userData.email} name='email'  onChange={handleChange} className="my-1" />
                        {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
                        
                    </div>
                    <div className="my-4">
                        <label>Contraseña:</label>
                        <input type='password' value={userData.password} name='password' onChange={handleChange} className="my-1" />
                        {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
                        
                    </div>
                    <div className="my-4">
                        <label>Confirmar Contraseña:</label>
                        <input type='password' value={userData.confirmPassword} name='confirmPassword'  onChange={handleChange} className="my-1" />
                        {errors.confirmPassword && <p style={{ color: 'red' }}>{errors.confirmPassword}</p>}
                        
                    </div>
                    <div className="my-4">
                        <button disabled={!userData.name || !userData.email || !userData.birthdate || !userData.nDni || !userData.password} type='submit' className="buttonDesign">Registrarse</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Register;