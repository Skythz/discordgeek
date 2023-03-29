import React from 'react'
import {Link} from "react-router-dom"


const header = ({small}) => {
  return(
    <div>
      <header className={small ? "small" : null}>
      <Link to="/" id="logo">{small ? "DG" : "DiscordGeek"}</Link>
      {!small ? <h4 id="sub">Number 1 Bots Marketplace</h4> : null}
        <Link to={small ? "/" : "/dashboard"} className="discordLogin btn btn-primary">{small ? "Logout" : "Login With Discord"}</Link>
      </header>
    </div>
  )
}

export default header
