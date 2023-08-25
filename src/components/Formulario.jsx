import { useState } from "react"
import useClima from "../hooks/useClima"

const Formulario = () => {
    
    /* Funciones locales de Este Componente */

    const [ alerta, setAlerta ] = useState('')

    /* #Funciones locales de Este Componente*/

    const { busqueda, datosBusqueda, consultarClima} = useClima()

    const { ciudad , pais } = busqueda

    const handleSubmit = e => {
        e.preventDefault();

        if( Object.values(busqueda).includes('')){
            setAlerta('Todos los campos son Obligatorios');
            return
        }
        setAlerta('')
        consultarClima(busqueda)
    }

  return (
    <>
        <div className="contenedor">
            { alerta && <p>{alerta}</p> }
            <form 
                action=""
                onSubmit={ handleSubmit }    
            >
                <div className="campo">
                    <label htmlFor="ciudad">Ciudad</label>
                    <input 
                        type="text"
                        name="ciudad"
                        id="ciudad"
                        onChange={ datosBusqueda }
                        value={ ciudad }
                    />
                </div>

                <div className="campo">
                    <label htmlFor="pais">País</label>
                    <select 
                        name="pais"
                        id="pais"
                        onChange={ datosBusqueda }
                        value={ pais }
                        >
                        <option value=""> Seleccione un País</option>
                        <option value="US">Estados Unidos</option>
                        <option value="MX">Mexíco</option>
                        <option value="AR">Argentina</option>
                        <option value="CO">Colombia</option>
                        <option value="CR">Costa Rica</option>
                        <option value="ES">España</option>
                    </select>
                </div>
                <input type="submit" value="Consultar Clima" />
            </form>
        </div>
    </>    
  )
}

export default Formulario