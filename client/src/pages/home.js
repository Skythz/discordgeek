import React, {useState, useEffect} from 'react'
import axios from 'axios'
import moment from 'moment'


// Components
import Header from '../components/header'
import TagList from '../components/tagList'
import Resource from '../components/resource'


// Images
import search from '../assets/img/icons/search.png'
import resourceImg from '../assets/img/resource-img.png'


// Tags
const tags = [
  "tag1", "tag2", "tag3", "tag4"
]




const Home = () => {

  const [allResources, setAllResources] = useState([])
  const [activeTag, setActiveTag] = useState('')

  // Pulling all resources from DB
  useEffect(() => {
    axios
      .get('http://localhost:3001/api/resources')
      .then(response => {
        setAllResources(response.data)
      })
  }, [])



  let shownResources = allResources.reduce((resourceArray, resource) => {
      if(activeTag === resource.tag || activeTag === ''){
        return (
          resourceArray.concat(
            <Resource
              key={resource.id}
              name={resource.name}
              desc={resource.desc}
              by={resource.by}
              price={resource.price}
              date={moment(resource.date).format("Do MMM YY")}
              img={resourceImg}
            />
          )
        )
      }
      return resourceArray
  }, [])


  if(shownResources.length === 0) shownResources = <h1 className="no-results">Sorry! No results found</h1>


  return(
    <div>
      <Header/>
      <div className="container">
        <div className="row">

          <TagList tags={tags} activeTag={activeTag} setActiveTag={setActiveTag} />


          <div className="col-md-9 col-12 main">

            <form id="search">
              <div className="search-container">
                <img alt="resource image" src={search} className="icon"/>
                <input type="search" name="q" placeholder="Search"/>
              </div>
            </form>



            <div id="resources">
              {shownResources}
            </div>


          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
