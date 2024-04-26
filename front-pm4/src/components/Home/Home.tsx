import Image from "next/image";
import Link from "next/link";

//components
import ContainerProducts from "../ContainerProducts"
import Navbar from "../Navbar/Navbar";

export function Home() {

  return (
    <>
      <section style={{ width: "100%" }}>
        <Link href="">
          <Image
            src='/logoTech.webp'
            width={1400}
            height={240}
            alt="tech"
            style={{ maxWidth: "100%" } as React.CSSProperties}
          />
          <Navbar></Navbar>
        </Link>
      </section>
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <h4>Experience is the new luxury!</h4>
        <span>-Tech Shop.</span>
      </div>
      <ContainerProducts></ContainerProducts>
    </>
  );
}

export default Home;
