import Image from "next/image";
import Link from "next/link";

//components
import ContainerProducts from "../ContainerProducts"
import Navbar from "../Navbar/Navbar";

//styles
import styles from './Home.module.css'

export function Home() {

  return (
    <>
      <section style={{ width: "100%" }}>
          <Navbar></Navbar>
          <Link href="">
          <Image
            src='/logoTech.webp'
            width={1400}
            height={240}
            alt="tech"
            style={{ maxWidth: "100%" } as React.CSSProperties}
          />
        </Link>
      </section>
      <div className={styles.textContainer}>
        <h4 className={styles.textExperience}>Experience is the new luxury!</h4>
        <span className={styles.textTechShop}>-Tech Shop.</span>
      </div>
      <ContainerProducts></ContainerProducts>
    </>
  );
}

export default Home;
