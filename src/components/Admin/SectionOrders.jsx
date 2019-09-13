import React, {useState} from 'react'
import { useCollection } from 'react-firebase-hooks/firestore';
import {ORDERSDATA} from '../../services/Firebase-config'

import OrderPending from './OrdersPending'
import OrderFinished from './OrdersFinished'


function SectionOrders () {
  const [state, setState] = useState("pending");
  
  const [value, loading, error] = useCollection(
    ORDERSDATA.where("status", "==", "pendiente"),
    {
      snapshotListenOptions: { includeMetadataChanges: true }
    }
  );

  const [valueFinished] = useCollection(
    ORDERSDATA.where("status", "==", "entregado"),
    {
      snapshotListenOptions: { includeMetadataChanges: true }
    }
  );

console.log(state)

  return (
    <>
       <section >
          <h1>Revisa el estado de los pedidos</h1>
          <h2 >Y actualizalos</h2>
      </section>
          <div>
           <ul >
              <li>
                <button
                className="button"
                  onClick={() => {
                  setState("pending");
                  }}>
                  Pendiente
                </button>
              </li>
              <li>
                <button
                  className="button"
                  onClick={() => {
                  setState("finished");
                  }}
                  >
                  Entregado
                </button>
              </li>
            </ul>
          </div>
        
          <div>
            {error && <strong> Error: {JSON.stringify(error)}</strong>}
            {loading && (
              <progress class="progress is-medium is-dark" max="100">
                45%
              </progress>
            )}
            {state === "pending" && (
              <div style={{ padding: 2 + "em" }}>
                {value && (
                  <div
                    className="columns is-multiline is-parent is-12-desktop  is-12-mobile table-container"
                    style={{ padding: 2 + "em" }}
                  >
                    {value.docs.map(doc => (
                      <OrderPending
                        key={doc.id}
                        name={doc.data().name}
                        time={doc.data().time}
                        id={doc.id}
                        cart={doc.data().cart}
                        status={doc.data().status}
                      ></OrderPending>
                    ))}
                  </div>
                )}
              </div>
            )}
            </div>
            
            <div>
            {error && <strong> Error: {JSON.stringify(error)}</strong>}
            {loading && (
              <progress class="progress is-medium is-dark" max="100">
                45%
              </progress>
            )}
            {state === "finished" && (
              <div style={{ padding: 2 + "em" }}>
                {value && (
                  <div
                    style={{ padding: 2 + "em" }}
                  >
                    {valueFinished.docs.map(doc => (
                      <OrderFinished
                        key={doc.id}
                        name={doc.data().name}
                        time={doc.data().time}
                        id={doc.id}
                        cart={doc.data().cart}
                        status={doc.data().status}
                      ></OrderFinished>
                    ))}
                  </div>
                )}
              </div>
            )}
            </div>
            </>
  )
}
export default SectionOrders


