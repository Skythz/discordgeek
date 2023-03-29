import React from 'react'

const ResourceRow = (props) => {
  return(
    <tr>
      <td>{props.name}</td>
      <td>{props.price ? "$" : "Free"}{props.price}</td>
      <td>{props.sold}</td>
      <td>${props.price * props.sold}</td>
      <td><a href="#" className="btn btn-secondary">Edit</a></td>
    </tr>
  )
}

export default ResourceRow
