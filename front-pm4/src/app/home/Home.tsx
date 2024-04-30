import Image from "next/image";
import Link from "next/link";

//components
import ContainerProducts from "../../components/ContainerProducts/ContainerProducts"


//styles
import styles from './Home.module.css'

export function Home() {

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
      <ContainerProducts></ContainerProducts>
    </>
  );
}

export default Home;
