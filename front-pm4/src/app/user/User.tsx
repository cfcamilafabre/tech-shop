'use client'

import { useEffect, useState } from "react";
import { IUserSession } from "../interfaces/IUserSession";
import { useRouter } from "next/navigation";
import Orders from "@/components/Orders/Orders";

export const User = () => {
    const router = useRouter()

    const [userSession, setUserSession] = useState<IUserSession>();

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true)

        if (typeof window !== "undefined" && window.localStorage) {
            const userToken = localStorage.getItem('userSession');
            setUserSession(JSON.parse(userToken!))
            if (!userToken) {
                router.push("/login")
            }
        }

    }, [])

    return (
        <>
            <div className="m-4 p-2 font-sans">
                <h1 className="text-xl font-semibold">¡Hola {userSession?.userData.name}!</h1>
                <span>Direccion de entrega: {userSession?.userData.address}</span>
            </div>
            <section className="m-4 p-2 font-sans">
                <h1 className="mb-2 font-sans font-semibold">Compras realizadas</h1>
                <Orders></Orders>
            </section>
        </>
    )
}

export default User;