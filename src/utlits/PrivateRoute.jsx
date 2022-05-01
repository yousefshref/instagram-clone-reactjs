import React from 'react'
import { Navigate } from 'react-router-dom'
import Home from '../Pages/Home'
import { UserAuth } from './AuthContext'


const PrivateRoute = () => {

    if (!localStorage.getItem('IsAuth') === true){
        return <Navigate to='/login' />
    }else{
      return <Home />
    }
}

export default PrivateRoute