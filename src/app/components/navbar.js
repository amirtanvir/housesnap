"use client"

import React, { useState } from 'react'
import MobileDropdown from './mobiledropdown'
import Router from 'next/router'
import ScrollLink from './ScrollLink'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {

    const [nav, setNav] = useState(false)

    const navSetter = () => {
        setNav((state) => !state)
    }

    const handleHomeClick = (e) => {
        e.preventDefault()
        Router.push('/')
    }

  return (

    <div className='navbar relative z-90'>
        <div className="relative isolate flex items-center gap-x-6 overflow-hidden bg-gray-50 py-2.5 px-6 sm:px-3.5 sm:before:flex-1">
  <svg viewBox="0 0 577 310" aria-hidden="true" className="absolute top-1/2 left-[max(-7rem,calc(50%-52rem))] -z-10 w-[36.0625rem] -translate-y-1/2 transform-gpu blur-2xl">
    <path id="1d77c128-3ec1-4660-a7f6-26c7006705ad" fill="url(#49a52b64-16c6-4eb9-931b-8e24bf34e053)" fillOpacity=".3" d="m142.787 168.697-75.331 62.132L.016 88.702l142.771 79.995 135.671-111.9c-16.495 64.083-23.088 173.257 82.496 97.291C492.935 59.13 494.936-54.366 549.339 30.385c43.523 67.8 24.892 159.548 10.136 196.946l-128.493-95.28-36.628 177.599-251.567-140.953Z" />
    <defs>
      <linearGradient id="49a52b64-16c6-4eb9-931b-8e24bf34e053" x1="614.778" x2="-42.453" y1="26.617" y2="96.115" gradientUnits="userSpaceOnUse">
        <stop stopColor="#9089FC" />
        <stop offset="1" stopColor="#FF80B5" />
      </linearGradient>
    </defs>
  </svg>
  <svg viewBox="0 0 577 310" aria-hidden="true" className="absolute top-1/2 left-[max(45rem,calc(50%+8rem))] -z-10 w-[36.0625rem] -translate-y-1/2 transform-gpu blur-2xl">
    <use href="#1d77c128-3ec1-4660-a7f6-26c7006705ad" />
  </svg>
  <div className="flex flex-wrap items-center gap-y-2 gap-x-4">
    <p className="text-sm leading-6 text-gray-900">
            <svg className='mx-2 h-4 w-4 inline mb-1' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" >
                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
            </svg>
    <strong className="font-semibold">info@housesnap.com</strong><svg viewBox="0 0 2 2" className="mx-2 inline h-0.5 w-0.5 fill-current" aria-hidden="true"><circle cx="1" cy="1" r="1" /></svg>
        <svg className='mx-2 h-4 w-4 inline mb-1' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
        </svg>
        07415826274
    </p>
    <Link href="http://localhost:3000/pricing" className="hidden md:flex rounded-full bg-gray-900 py-1 px-3.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900">See our pricing guidelines!<span aria-hidden="true">&rarr;</span></Link>
  </div>
  <div className="flex flex-1 justify-end">
    <button type="button" className="-m-3 p-3 focus-visible:outline-offset-[-4px]">
      <span className="sr-only">Dismiss</span>
      <svg className="h-5 w-5 text-gray-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
      </svg>
    </button>
  </div>
</div>

        <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
            <div className="container flex flex-wrap items-center justify-between mx-auto">
                <Link href="http://localhost:3000/" className="flex items-center cursor-pointer">
                    <Image src="https://res.cloudinary.com/dp86ovnda/image/upload/v1676720943/Black_White_Minimal_Design_Studio_Logo_3_qkiawv.svg" className="h-6 mr-3 sm:h-9" alt="HouseSnap Logo" />
                    <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">HouseSnap</span>
                </Link>
                <button onClick={navSetter} data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                </button>
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <Link href="http://localhost:3000/about" className="cursor-pointer block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">Home</Link>
                        </li>
                        <li>
                            <ScrollLink key='service' target='services'><p className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Services</p></ScrollLink>
                        </li>
                        <li>
                            <ScrollLink key='instructions' target='instructions'><p className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Our Method</p></ScrollLink>
                        </li>
                        <li>
                            <Link href="http://localhost:3000/pricing" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-red-600 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Pricing</Link>
                        </li>
                        <li>
                            <Link href="http://localhost:3000/contact" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        { nav ? < MobileDropdown/> : (null) }
    </div>
  )
}

export default Navbar