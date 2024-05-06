"use client";
import Image from "next/image";
import Link from "next/link";

//components
import ContainerProducts from "../../components/ContainerProducts/ContainerProducts"
import { Login } from "../login/Login"


//styles
import styles from './Home.module.css'
import { useEffect, useState } from "react";
import { redirect } from 'next/navigation'

export function Home() {

  const [token, setToken] = useState();
  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const userToken = localStorage.getItem('userSession');
      setToken(JSON.parse(userToken!))
      !userToken && redirect("/login")
    }
  }, [])

  return (
    <>
      <section style={{ width: "100%" }}>
        <Link href="">
          <Image
            src='/logoTech.webp'
            width={1400}
            height={270}
            alt="tech"
            style={{ maxWidth: "100%" } as React.CSSProperties}
          />
        </Link>
      </section>
      <div className={styles.textContainer}>
        <h4 className={styles.textExperience}>Experience is the new luxury!</h4>
        <span className={styles.textTechShop}>-Tech Shop.</span>
      </div>
      <ContainerProducts/>
    </>
  );
}

export default Home;
