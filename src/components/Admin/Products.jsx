import React from 'react'

function TrProduct ({data, edit, remove }) {
  return (
    <tr>
      <td>{data.title}</td>
      <td>{data.description}</td>
      <td>{data.category}</td>
      <td>{`S./ ${data.price}`}</td>
      <td><a>{edit}</a></td>
      <td><a>{remove}</a></td>
    </tr>
  )
}
export default TrProduct