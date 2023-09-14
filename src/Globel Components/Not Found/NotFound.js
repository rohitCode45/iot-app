import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function NotFound() {
  const navigate = useNavigate()
  useEffect(()=>{
navigate('/')
  },[])
  // navigate('/')
  return (
    <div>Page not found</div>
  )
}

export default NotFound