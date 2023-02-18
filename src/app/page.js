"use client"

import { Inter } from '@next/font/google'
import Navbar from './components/navbar'
import Hero from './components/hero'
import Services from './components/services'
import Footer from './components/footer'
import Instructions from './components/instructions'
import CookieConsent from "react-cookie-consent";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <Navbar/>
      <Hero/>
      <Services/>
      <Instructions/>
      <Footer/>
      <CookieConsent>This website utlises cookies to enhance your experience.</CookieConsent>
    </main>
  )
}
