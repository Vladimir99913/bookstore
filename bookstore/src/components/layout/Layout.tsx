// import React from 'react'
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";
import { Outlet } from 'react-router-dom'

// interface LayoutProps {
//   children?: React.ReactChild | React.ReactNode
// }

export function Layout () {
  return (
    <>
    <Navbar/>
    <main className="d-flex flex-column justify-content-evenly align-items-center w-75 mx-auto" style={{marginBottom: '70px'}}>
      <Outlet/>
    </main>
    <Footer/>
    </>
  )
}
