import { Link } from "react-router-dom"

const Contacto= () => {
    return(
     <main>
        <h1>¿Como te podemos ayudar?</h1>
        <form>
            <label htmlFor="email">Correo:</label>
            <input  className="cuadro1" type="email" placeholder="Ingresa tu correo"/>
            <label htmlFor="descripcion">Descripcion:</label>
            <textarea id="descripcion" cols="30" rows="10"></textarea>

            <button className="btn">Enviar</button>
        </form>

    </main>
    )
}


export default Contacto