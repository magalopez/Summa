import React from 'react'
import TrProduct from './Products'
// import './table.css' 

function Table ({data}) {
  return (
    <div className='container-list'>
      <table className="fixed_headers">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Descripcion</th>
            <th>Categoria</th>
            <th>Precio</th>
            <th>Editar</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {data.map(prod => (
          <TrProduct key={`ProductItem-${prod.title}`} data={prod} edit={'edit'} remove={'remove'}/>))}
        </tbody>
      </table>
    </div>
  )
}
export default Table