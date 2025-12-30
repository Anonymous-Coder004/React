import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom' //a placeholder where the matched child route component will be rendered..Without this, nested routing does not work.

function Layout() {
  return (
    <>
    <Header />
    <Outlet /> {/*now header and footer will always apppear and in between them children route like home about will be appreared */}
    <Footer />
    </>
  )
}

export default Layout