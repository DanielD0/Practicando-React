import React,{useState} from 'react'

const Lista = () => {
    const listaInicial = [
        {id: 1,texto:'tarea 1'},
        {id: 2,texto:'tarea 2'},
        {id: 3,texto:'tarea 3'}
    ]
    const [lista, setLista] = useState(listaInicial)

    const agregarElemento = () => {
        console.log('click');
        setLista([
            ...lista,
            {id:4,texto:'texto 4'}
        ])
    }
  return (
    <div>
        <h2>Listas</h2>
        {
            lista.map((e,index)=>(
                <h4 key={index}>{e.texto}</h4>
            ))
        }
        <button onClick={()=>{agregarElemento()}}>Agregar</button>
    </div>
  )
}

export default Lista