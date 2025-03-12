import { useRef } from "react"

export const Filtro = ({ setNombre }) => {

    const inputRef = useRef()
    return <>
        <input ref={inputRef} type="text" placeholder="Ingresá el nombre de tu personaje" />
        <button onClick={() => setNombre(inputRef.current.value)}> Buscar</button>
    </>


}