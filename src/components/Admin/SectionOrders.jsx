import React, {useEffect, useState} from 'react'
import {ORDERSDATA} from '../../services/Firebase-config'

function SectionOrders ({}) {
  const [ORDERS, SETORDERS] = useState([]);

  useEffect(() => {
    ORDERSDATA.onSnapshot(snap => {
      let products = [];
      snap.forEach(doc => {
        products.push(doc.data());
      });
      SETORDERS(products);
    });
  }, []);

  console.log('AAAAAAAAAAAAAAAAA', ORDERS)
  
  return (
    <>
      <div className='container-list'>
        <table className="fixed_headers">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Descripcion</th>
              <th>Categoria</th>
              <th>Precio</th>
            </tr>
          </thead>
          <tbody>
          {
            ORDERS.map(item=> {
              item.cart.map(prod=>{
                 console.log(prod.object)
              })
            })
          }
          </tbody>
        </table>
      </div>

    </>
  )
}
export default SectionOrders

