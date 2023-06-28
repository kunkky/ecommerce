import React from 'react'
import { Routes, Route } from 'react-router-dom'
import About from './Pages/About'
import Login from './Pages/Login'
import Forget from './Pages/Forget'
import Contact from './Pages/Contact'
import Dashboard from './Pages/Dashboard'
import Home from './Pages/Home'
import NotFound from './Pages/NotFound'
import Footer from './Components/Footer'
import Nav from './Components/Nav'
import SinglePage from './Pages/SinglePage'
import CategoryPage from './Pages/CategoryPage'

import { Navigate } from 'react-router-dom'

console.log(sessionStorage.getItem("user"));
const isLoggedIn = () => {
  if (sessionStorage.getItem("user")) {
    return true
  } else {
    return false
  }
}

const ProtectedRoutes = ({ isLoggedIn, children }) => {
  if (!isLoggedIn) {
    return <Navigate to={"/"} replace={true} />
  } else {
    return children
  }
}

const App = () => {
  return (
  <>
      <Nav />

    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={
          <ProtectedRoutes isLoggedIn={isLoggedIn()}>
        <Login />
        </ProtectedRoutes >
        } 
        
        />
        <Route path='/dashboard' element={
          <ProtectedRoutes isLoggedIn={isLoggedIn()}>
            <Dashboard/>
          </ProtectedRoutes>
        } />
        <Route path='/forget' element={
          <ProtectedRoutes isLoggedIn={isLoggedIn()}>
            <Forget />
          </ProtectedRoutes>
        } />
        <Route path='products/:id' element={
          <ProtectedRoutes isLoggedIn={isLoggedIn()}>
            <SinglePage/>
          </ProtectedRoutes>
        } />
        <Route path='/category/:id' element={
          <ProtectedRoutes isLoggedIn={isLoggedIn()}>
            <CategoryPage />
          </ProtectedRoutes>
        } />
        <Route path='*' element={<NotFound />} />
    </Routes>
    <Footer/>
  </>
  )
}

export default App