import { useEffect, useState } from "react";

export const PersonajesAleatorios = ()=>{
    const [personajes,setPersonajes] = useState([])

    const numerosAleatorios = ()=>{
        let lista = []
        for (let index = 0; index < 5; index++) {
            let numero = Math.floor(Math.random() * (826 - 1) + 1);
            lista.push(numero)            
        }
        return lista
    }

    const obtenerDatos = async ()=>{
        let lista = numerosAleatorios()
        let respuesta = await fetch('https://rickandmortyapi.com/api/character/'+lista)
        let datos = await respuesta.json()
        setPersonajes(datos)
    }

    useEffect(()=>{
        obtenerDatos()
    },[])

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