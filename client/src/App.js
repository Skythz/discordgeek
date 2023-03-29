import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import search from './assets/img/icons/search.png'
import resourceImg from './assets/img/resource-img.png'


// Components
import Header from './components/header'
import TagList from './components/tagList'
import MissingPage from './components/missingPage'

// Pages
import Home from './pages/home'
import Dashboard from './pages/dashboard'
import Product from './pages/product'



function App() {
  return (
    <Router>

        <Switch>

          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/dashboard">
            <Dashboard />
          </Route>

          <Route path="/product/:id">
            <Product />
          </Route>

          <Route path="*">
            <MissingPage />
          </Route>

        </Switch>

    </Router>
  )
}

export default App;
