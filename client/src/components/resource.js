import React from 'react'

import {Link} from 'react-router-dom'

const Resource = (props) => {

  let price = props.price === undefined ? "Free" : "$" + props.price

  return(
    <Link to={"/product/" + props.name} className="resource" key={props.id}>
      <img alt="resource image" src={props.img} />

      <h1>{props.name}</h1>
      <span className="price">{price}</span>
      <p>{props.desc}</p>
      <footer>
        <span className="by">{props.by}</span>
        <span className="date">{props.date}</span>
      </footer>
    </Link>
  )
}

export default Resource
