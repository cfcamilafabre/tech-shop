'use client';
//hooks
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

//helpers
import { validate } from "@/helpers/validate";
import { registerUser } from "../../helpers/registerUser"
//interfaces
import { IRegisterProps, IRegisterErrorProps } from "../interfaces/registerProps";

export const Register = () => {
    const router = useRouter();

    const initialState = {
        name: '',
        email: '',
        password: '',
        address: '',
        phone: ''
    }

    const initialErrors = {
        name: 'Ingresa un nombre válido',
        email: 'Ingresa un mail válido',
        password: 'Ingresa una contraseña válida',
        address: 'Ingresa una dirección válida',
        phone: 'Ingresa un teléfono válido'
    }

    const [userData, setUserData] = useState<IRegisterProps>(initialState);

    const [errors, setErrors] = useState<IRegisterErrorProps>(initialErrors);

    const handleOnSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            await registerUser(userData);
            alert("Usuario registrado correctamente!");
            router.push("/user");
        } catch (error) {
            console.error('Failed to register user:', error);
            // Aquí puedes mostrar un mensaje de error al usuario
        }
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;

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
                        <label>Nombre</label>
                        <input type='text' value={userData.name} name='name' onChange={handleChange} required className="my-1" />
                        {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
                    </div>
                    <div className="my-4">
                        <label>Email</label>
                        <input type='text' value={userData.email} name='email' onChange={handleChange} required className="my-1" />
                        {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}

                    </div>
                    <div className="my-4">
                        <label>Contraseña</label>
                        <input type='password' value={userData.password} name='password' onChange={handleChange} required className="my-1" />
                        {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}

                    </div>
                    <div className="my-4">
                        <label>Dirección</label>
                        <input type='text' value={userData.address} name='address' onChange={handleChange} required className="my-1" />
                        {errors.address && <p style={{ color: 'red' }}>{errors.address}</p>}

                    </div>
                    <div className="my-4">
                        <label>Teléfono</label>
                        <input type='text' value={userData.phone} name='phone' onChange={handleChange} required className="my-1" />
                        {errors.phone && <p style={{ color: 'red' }}>{errors.phone}</p>}

                    </div>
                    <div className="my-4">
                        <button disabled={!userData.name || !userData.email || !userData.password} type='submit' className="buttonDesign">Registrarse</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Register;