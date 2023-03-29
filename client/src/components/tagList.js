import React from 'react'

const TagList = ({tags, activeTag, setActiveTag}) =>{


  const tagArray = tags.map(tag => {
      return(
        <li className={`tag ${activeTag == tag ? "active" : ''}`} onClick={() => activeTag === tag ? null : setActiveTag(tag)}>
          {tag}
          <span className="delete" onClick={() => setActiveTag("")}>&#x2715;</span>
        </li>
      )
    })

  return(
    <div className="col-md-3 col-12 sidebar">
      <h1>Tags</h1>
      <ul className="tagList">
        {tagArray}
      </ul>
    </div>
  )
}

export default TagList
