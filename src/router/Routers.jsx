import React from 'react'
import {Routes , Route , Navigate} from 'react-router-dom';
import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'
import SearchResult from '../pages/SearchResult';
 import TourDetalis from '../pages/TourDeatils'
import Tours from '../pages/Tours'


const Routers = () => {
  return (
    <Routes>
    <Route path='/' element = {<Navigate to='/home'/>}/>
    <Route path='/home' element = {<Home/>} />
    <Route path='/login' element = {<Login/>} />
    <Route path='/register' element = {<Register/>} />
    <Route path='/tours/search' element = {<SearchResult/>} />
    <Route path='/tours/:id' element = {<TourDetalis/>} />
    <Route path='/tours' element = {<Tours/>} />
  </Routes>
  )
}

export default Routers