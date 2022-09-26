import React,{useState} from 'react'

const Form = () => {
    const [fruta, setFruta] = useState('')
    const [descripcion, setDescripcion] = useState('')
    const [mandado, setMandado] = useState([])

    const guardardatos = (e) => {
        e.preventDefault()
        

        if(!fruta.trim()){
            console.log('esta vacio Fruta');
            return
        }
        if(!descripcion.trim()){
            console.log('esta vacio descripcion');
            return
        }
        setMandado([...mandado,{fruta: fruta, descripcion:descripcion}])

        e.target.reset()
        setFruta('')
        setDescripcion('')
    }
  return (
    <div>
        <h2>Formulario</h2>
        <form onSubmit={ guardardatos }>
            <input 
            type="text"
            placeholder='Ingrese Fruta'
            className='form-control mb-2'
            onChange={(e) => setFruta(e.target.value)}
            />
            <input 
            type="text"
            placeholder='Ingrese la descripcion'
            className='form-control mb-2'
            onChange={(e) => setDescripcion(e.target.value)}
            />
            <button className='btn btn-primary btn-block' type='submit'>Agregar</button>
        </form>
        {
            mandado.map((e,index) => (
                <ul>{e.frutaagregar} - {e.descripcionagregar}</ul>
            ))
        }
    </div>
  )
}

export default Form