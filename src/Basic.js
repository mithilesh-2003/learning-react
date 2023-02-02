import React from 'react'

function Basic(props) {
  return (
    <div>
        <img src={props.img} style={{height:"200px",width:"400px",}} alt='thumbnil'/>
        <h2>{props.title}</h2>
        <p>{props.desc}</p>
        <p>{props.pushpa}</p>
    </div>
  )
}

export default Basic