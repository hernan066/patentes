import React from 'react'
import './Detalle.css'

const Detalle = ({empleado}) => {
    return (
        <div className='detalle__main'>
            <h3>Datos del empleado</h3>
            <p>Trabaja en {empleado.Local}</p>
            <p>Nombre: {empleado.Nombre}</p>
            <p>Telefono: {empleado.Telefono}</p>
            
           
            
            
        </div>
    )
}

export default Detalle
