import React from 'react'

function TrProduct ({data, edit, remove }) {
  return (
    <tr>
      <td>{data.title}</td>
      <td>{data.description}</td>
      <td>{data.category}</td>
      <td>{`S./ ${data.price}`}</td>
      <td><a onClick={()=>edit(data.id)}>{'editar'}</a></td>
      <td><a onClick={()=>remove(data.id)}>{'remove'}</a></td>
    </tr>
  )
}
export default TrProduct