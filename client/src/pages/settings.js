import React from 'react'

const Settings = (props) => {
  return(
    <form id="settings">
      <input placeholder="Name" name="name" value={props.name} className="input white" />
      <input placeholder="E-mail" name="email" value={props.email} className="input white" />
      <input placeholder="PayPal" name="paypal" value={props.paypal} className="input white" />
    </form>
  )
}

export default Settings
