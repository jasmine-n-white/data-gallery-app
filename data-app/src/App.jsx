import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import './App.css'
import Home from './Home'
import NotFound from './NotFound'
import Header from './Header'
import CreatureProfile from './CreatureProfile'

function App() {

  return (
    <>
    <Header />
    <Routes>
      <Route path="/" Component={Home} />
      <Route path ="entry/:id" Component={CreatureProfile} />
      <Route path="*" Component={NotFound} />
    </Routes>
    </>
  )
}

export default App
