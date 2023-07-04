import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
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

const isLoggedIn = () => {
  if (sessionStorage.getItem("token")) {
    return true
  } else {
    return false
  }
}

const ProtectedRoutes = ({ isLoggedIn, children }) => {
  if (!isLoggedIn) {
    return <Navigate to={"/login"} replace={true} />
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
        <Route path='/login' element={<Login />} />
        <Route path='/forget' element={<Forget />} />
        <Route path='/dashboard' element={
          <ProtectedRoutes isLoggedIn={isLoggedIn()}>
            <Dashboard/>
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