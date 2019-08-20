import React from "react"

import "./styles/list.css"

const List = props => {
  return (
    <li className="list-wrapper">
      <h4 className="list--header">{props.title}</h4>
      <ul className="list--items">
        {props.list.map((item, index) => {
          return <li key={index}>{item}</li>
        })}
      </ul>
    </li>
  )
}

export default List
