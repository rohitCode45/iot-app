import React from 'react'
import { useLocation } from 'react-router-dom'

function Yardview() {
    const yardLocation = useLocation()
    console.log(yardLocation.pathname)
  return (
    <div>Yardview</div>
  )
}

export default Yardview