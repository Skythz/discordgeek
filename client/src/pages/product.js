import React from 'react'

import Header from '../components/header'
import MissingPage from '../components/missingPage.js'

import {useParams, Link} from 'react-router-dom'

const Product = (props) => {
  let {id} = useParams()
  return(
    <div>
      <Header small />
      <div id="product">
        <Link to="/" className="back">&#x27F5; Back to store</Link>
        <h1>{id}</h1>
        <p>Adipiscing in nunc proin blandit. Consequat faucibus vitae ligula sit egestas auctor aliquet vitae. Et in risus faucibus placerat vitae enim. Nisl faucibus at non in velit ipsum urna diam. Risus curabitur purus pretium varius at aliquet. Duis aliquet ut porttitor interdum diam.</p>

        <footer>
          <p className="price">Total: <span>$3.99</span></p>
          <input placeholder="Your E-mail" name="email" type="email" className="input full-width" required />
          <input type="submit" value="Purchase" className="btn btn-primary full-width" />
        </footer>
      </div>
    </div>
  )
}



export default Product
