import React from 'react'
import '../app/globals.css'
import Navbar from '@/app/components/navbar'
import Footer from '@/app/components/footer'

const Contact = () => {
  return (
    <div>
    <Navbar/>
    <div className='mt-10 px-10'>
    <h1 className='mt-5 mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-5xl dark:text-gray-900' >Contact Us</h1>
    <div className="mt-10 mb-6 text-lg font-normal text-gray-700 lg:text-xl dark:text-gray-600">
    
    <p>Please contact one of our representative members below. If they do not pickup - send them a text with a description of the flat e.g. 2 Bed Flat Large, ASAP - they will be in touch with 1 hour with availability and a quote!</p>
    
    <p className='mt-10'> <span className='font-bold'> Name: </span> Amir Tanvir <br />
                          <span className='font-bold'> Mobile Number: </span> 07415826274 <br />
                          <span className='font-bold'> Email: </span> amirtanvir96@housesnap.com
    </p>

    <p className='mt-10'> <span className='font-bold'> Name: </span> Laiba Junaid <br />
                          <span className='font-bold'> Mobile Number: </span> 07415826274 <br />
                          <span className='font-bold'> Email: </span> amirtanvir96@housesnap.com
    </p>


    </div>


      <p className='mt-5 mb-10 italic'></p>
    
    </div>
    <Footer/>
</div>
  )
}

export default Contact