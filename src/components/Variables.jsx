import React from 'react'

export const Variables = () => {
    const saludo = 'Hola desde constante'
    const img = 'https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg'
  return (
    <div>
        <h2>Nuevo Componente { saludo }</h2>
        <img src={img} alt=""/>
    </div>
  )
}

export default Variables