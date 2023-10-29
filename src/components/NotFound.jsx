import React from 'react'
import '../styles/notFound.scss'
import { ImFileEmpty } from "react-icons/im";


const NotFound = () => {
  return (
    <div className="not-found">
    <ImFileEmpty className="empty"/>
    <p>No data found</p>
  </div>
  )
}

export default NotFound