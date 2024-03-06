import React from 'react'
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

interface LayoutProps {
  children?: React.ReactChild | React.ReactNode
}

export function Layout ({children}:LayoutProps) {
  return (
    <>
    <Navbar/>
    <main className="d-flex flex-column justify-content-evenly align-items-center w-75 mx-auto ">{children}</main>
    <Footer/>
    </>
  )
}
