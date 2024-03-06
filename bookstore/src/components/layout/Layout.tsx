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
    <main>{children}</main>
    <Footer/>
    </>
  )
}
