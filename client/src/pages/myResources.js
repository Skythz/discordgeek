import React from 'react'
import ResourceRow from '../components/resourceRow'


const ResourcesTable = ({resources}) => {

  let resourceRows = []

  for(let item in resources){
    let resource = resources[item]
    let price = resource.price === undefined ? false : resource.price

    resourceRows.push(<ResourceRow name={resource.name} price={price} sold={resource.sold} key={resource.id}/>)
  }


  return(
    <table id="resourceTable">
      <colgroup>
       <col span="1" style={{width: "25%"}} />
       <col span="1" style={{width: "20%"}} />
       <col span="1" style={{width: "20%"}} />
       <col span="1" style={{width: "25%"}} />
       <col span="1" style={{width: "10%"}} />
     </colgroup>

      <thead>
        {/* Headers */}
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>Sold</th>
          <th>Total Profit</th>
          <th>Action</th>
        </tr>
      </thead>

      <tbody>

      {resourceRows}

          <tr className="new">
            <td colSpan="5">
              <a href="#">
                New
              </a>
            </td>
          </tr>

      </tbody>
    </table>
  )
}

export default ResourcesTable
