import Link from "next/link";

export const notFoundPage = () => {
    return ( 
        <div style={{display: "flex", flexDirection:"column", margin: "3em", padding: "1em", lineHeight:"1.5", alignItems:"center", width:"90%", height:"20em", justifyContent:"center"}}> 
        <h1 style={{fontSize:"2.5em"}}> ¡Lo sentimos! Esta página no existe
        </h1>
        <h2 style={{fontSize:"1.8em"}}>Quieres volver a la página principal?</h2>
        <Link href='/home' style={{padding:".8em", backgroundColor:"#CAAAAD", color:"white", borderRadius:"5%"}}>Haz click aquí</Link>
        </div>
    )
}

export default notFoundPage;