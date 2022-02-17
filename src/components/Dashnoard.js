import React from 'react'
import  { Navigate } from 'react-router-dom'
import {useAuth} from '../contexts/AuthContext'


export default function Dashnoard() {
    const {currentUser} = useAuth()

    if (!currentUser){
    return <Navigate to='/login'  />
  }

  return (

    <div>Dashnoard</div>
  )
}
