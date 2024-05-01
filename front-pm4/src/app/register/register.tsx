'use client';
//hooks
import { useState, useEffect } from "react";

//helpers
import { validate } from "@/helpers/validate";

export const Register = () => {

    const initialState = {
        name: '',
        birthdate: '',
        nDni: '',
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

    const [userData, setUserData] = useState(initialState);

    const [errors, setErrors] = useState(initialErrors);
    
    const [form, setForm] = useState(initialState);

    const handleOnSubmit = (event:any) => {
        event.preventDefault();

        if (userData.password !== userData.confirmPassword) {
            setErrors({ ...errors, confirmPassword: 'Las contraseñas no coinciden' });
            return;
        }

    }

    const handleChange = (event:any) => {
        const { name, value} = event.target;
        
        setForm({
            ...form, [name]: value
        });

        setUserData({
            ...userData,
            [name]: value
        })
    }

    //validar errores cuando se actualiza el form
    useEffect(() => {
        setErrors(validate(form, errors));
    }, [form])
    

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
                        <input type='date' value={userData.birthdate} name='birthdate'  onChange={handleChange} className="my-1"  />
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