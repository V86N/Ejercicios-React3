import React from 'react'
import { Link } from 'react-router-dom'

const Headers = () => {
  return (
    <div>
        <Link to = "/">Home</Link> /
        <Link to="/Reserve">Reserve</Link> / 
        <Link to="/Contact">Contact</Link>
    </div>
  )
}

export default Headers