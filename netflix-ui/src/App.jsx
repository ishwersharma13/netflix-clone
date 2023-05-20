import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Login } from './pages/Login'
import { Signup } from './pages/Signup'
import { Netflix } from './pages/Netflix'
import { Player } from './pages/Player'
import { Movies } from './pages/Movies'
import { TvShows } from './pages/TvShows'
import UserListedMovies from './pages/UserListedMovies'
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/signup' element={<Signup />} />
        <Route exact path='/' element={<Netflix />} />
        <Route exact path='/player' element={<Player />} />
        <Route exact path='/movies' element={<Movies />} />
        <Route exact path='/tv' element={<TvShows />} />
        <Route exact path="/mylist" element={<UserListedMovies />} />

      </Routes>
    </BrowserRouter>

  )
}
