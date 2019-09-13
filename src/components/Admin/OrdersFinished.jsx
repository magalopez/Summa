import React from 'react'

function OrderFinished ({cart, name,status,id, time}) {

  return (
    <>
      <h1>{name}</h1>
     
      <table>
        <thead>
          <tr>
            <th>
               <h4>Orden</h4>
            </th>
            <th>
              <h1>{status}</h1>
            </th>
          </tr>
        </thead>
        <tbody>
          {cart.map(product => (
          <tr>
            <td>{product.object.title}</td>
            <td>{product.object.price}</td>
          </tr>
          ))}
        </tbody>
      </table>
        <div>
      </div>
    </>
  )
}

export default OrderFinished