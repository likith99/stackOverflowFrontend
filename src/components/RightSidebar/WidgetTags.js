import React from 'react'
import "./Rightsidebar.css"
function WidgetTags() {
    const tags=['c',"c++","python","firebase","HTML","css","Javascript","mongodb","mysql","express","Reactjs","Java","Router"]
  return (
    <div className='widget-tags'>
        <h4>Watched Tags</h4>
        <div class="widget-tags-div">
            {tags.map((tag)=>(
                <p key={tag}>{tag}</p>
            ))}
        </div>
    </div>
  )
}

export default WidgetTags