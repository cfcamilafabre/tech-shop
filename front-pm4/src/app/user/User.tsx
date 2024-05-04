'use client'

import { useEffect, useState } from "react";
import { IUserSession } from "../interfaces/IUserSession";
import { redirect } from "next/navigation";

export const User = () => {
    
    const [userSession, setUserSession] = useState<IUserSession>();

    useEffect(() => {
        if (typeof window !== "undefined" && window.localStorage) {
            const userToken = localStorage.getItem('userSession');
            setUserSession(JSON.parse(userToken!))

            if(!userToken) {
                redirect("/login")
            }
        }
    }, [])
    
    return ( 
        <div className="m-4 p-2">
            <h1 className="text-xl font-semibold">¡Hola {userSession?.userData.name}!</h1>
            <span>Direccion de entrega: {userSession?.userData.address}</span>
        </div>
    )
}

export default User;