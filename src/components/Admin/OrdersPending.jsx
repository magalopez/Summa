import React from 'react'
import { firebaseInit } from "../../services/Firebase-config";


function OrderPending ({cart, name,status,id, time}) {


  const updateOrder = text => {
    const docOrder = firebaseInit.firestore().doc(`orders/${id}`);
    docOrder.update({
      status: text
    });
  };

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
      <div class="is-grouped">
            <button
              class="button is-warning"
              onClick={() => {
                updateOrder("entregado");
              }}
            >
              Entregado
            </button>
            <button
              class="button is-danger"
              onClick={() => {
                updateOrder("cancelado");
              }}
            >
              Cancelado
            </button>
          </div>
    </>
  )
}

export default OrderPending