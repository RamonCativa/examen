import { useEffect, useState } from "react"

export const Buscar = ({nombre})=>{
    const [personajes, setPersonajes] = useState([])
    
    const obtenerDatos = async ()=>{
        let respuesta = await fetch('https://rickandmortyapi.com/api/character/?name='+nombre)
        let datos = await respuesta.json()
        setPersonajes(datos.results)
    }

    useEffect(()=>{
        if(valor !== ''){
            obtenerDatos()
        }
    },[valor])

    return <>
        {personajes.map((element, index)=>{
            return <div key={index}>
                <h3>{element.name}</h3>
                <img src={element.image} alt="" />
                <p>{element.species}</p>
                
            </div>
        })}
    </>
}