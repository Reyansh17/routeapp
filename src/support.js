import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Support() {
    const navigate=useNavigate();
    function changehandler(){
         navigate('/')
    }
    function backhandler(){
        navigate(-1)
    }
  return (
    <div>
      
      this is support page
      <button onClick={changehandler}>move to home page</button>
      <button onClick={backhandler}>go back</button>
    </div>
  )
}
