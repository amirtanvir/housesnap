import React from 'react'
import { Button } from 'flowbite-react'

const Services = () => {
  return (
    <div id='services'>
        <section className="bg-gray-200 dark:bg-gray-800">
            <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                <div className="max-w-screen-md mb-8 lg:mb-16">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Services</h2>
                    <p className="text-gray-500 sm:text-xl dark:text-gray-400 ">At HouseSnap, we take pride in providing a comprehensive selection of expert real estate services to meet all of your needs.</p>
                </div>
                <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0 ">
                        <div className='bg-gray-300 dark:bg-gray-700 dark:border-gray-700 dark:hover:bg-gray-700 p-8 rounded-md'>
                        <h3 className="mb-2 text-xl font-bold dark:text-white">Real Estate Photography</h3>
                        <p className="text-gray-500 dark:text-gray-400">We understand the significance of high-quality real estate photography in the industry. 
                        That&apos;s why we are dedicated to providing the finest real estate photography services in South East London. 
                        Our team of experienced photographers use cutting-edge equipment and techniques to showcase your property in the best possible light. 
                        We believe that stunning, detailed photography is the key to attracting potential buyers and creating an immersive experience that highlights the unique 
                        features of your property. Whether you&apos;re selling a single-family home or a multi-unit complex, HouseSnap has the skills and expertise to create 
                        professional, captivating images that will help you sell your property faster and for the best possible price. </p>
                </div>
                        <div className='bg-gray-300 dark:bg-gray-700 dark:border-gray-700 dark:hover:bg-gray-700 p-8 rounded-md'>
                        <h3 className="mb-2 text-xl font-bold dark:text-white">Drone Footage</h3>
                        <p className="text-gray-500 dark:text-gray-400">We are proud to offer cutting-edge drone footage as part of our real estate photography services. 
                        Our team of certified drone pilots use the latest drone technology to capture stunning aerial views of your property, providing a unique perspective 
                        that sets your listing apart from the rest. Whether you&apos;re selling a sprawling estate or a beachfront property, our drone footage will help showcase 
                        the full extent of your property and its surroundings, giving potential buyers a true sense of its size and location. From breathtaking overhead shots 
                        to detailed close-ups, our drone footage will provide your listing with a level of detail and drama that simply cannot be achieved through traditional 
                        photography methods.</p>

                        <div className='flex'>
                        </div>
                </div>
                        <div className='bg-gray-300 dark:bg-gray-700 dark:border-gray-700 dark:hover:bg-gray-700 p-8 rounded-md'>
                            <h3 className="mb-2 text-xl font-bold dark:text-white">Virtual Staging</h3>
                            <p className="text-gray-500 dark:text-gray-400">We understand the importance of presenting a well-designed and inviting space when selling a property. 
                            That&apos;s why we offer virtual staging services to help you bring your empty or minimally furnished space to life. With our virtual staging, you can 
                            showcase your property's full potential by adding virtual furniture and decor that accurately reflects your desired style and aesthetic. Our team 
                            of experts uses advanced technology and design techniques to create a virtual staging experience that feels realistic and true to life, allowing potential
                            buyers to easily envision themselves in the space. Whether you&apos;re selling a new construction property or an older home, our virtual staging services
                            will help you sell your property faster and for more money.</p>
  
                        </div>
                        <div className='bg-gray-300 dark:bg-gray-700 dark:border-gray-700 dark:hover:bg-gray-700 p-8 rounded-md'>
                            <h3 className="mb-2 text-xl font-bold dark:text-white">360° Virtual Tour</h3>
                            <p className="text-gray-500 dark:text-gray-400">Our virtual tours provide potential buyers with an immersive and interactive experience that 
                            allows them to explore your property from every angle. With our advanced 360° technology, viewers can navigate through each room and space, zoom
                             in on details, and even view the property in a bird's eye perspective. Our team of experts uses high-quality equipment and techniques to create 
                             a seamless and visually stunning virtual tour that accurately reflects the look and feel of your property. 360° virtual tours are an effective way
                              to showcase the full potential of your property and are proven to increase engagement and drive more interest from potential buyers. Choose HouseSnap 
                              to provide you with a premium 360° virtual tour experience that will help you sell your property faster and for the best possible price.</p>
          
                        </div>
                        <div className='bg-gray-300 dark:bg-gray-700 dark:border-gray-700 dark:hover:bg-gray-700 p-8 rounded-md'>
                            <h3 className="mb-2 text-xl font-bold dark:text-white">Floor Plans</h3>
                            <p className="text-gray-500 dark:text-gray-400">At HouseSnap, we understand that accurate and detailed floor plans are a crucial component in showcasing 
                            the layout and features of your property. That's why we offer professional floor plan services as part of our real estate photography offerings. Our team of 
                            experienced photographers and designers use advanced technology and techniques to create detailed and precise floor plans that accurately represent your property's 
                            layout. Our floor plans are customized to your specific property and can include features such as room dimensions, window and door placements, and other important details. 
                            Clear and accurate floor plans can help potential buyers visualize the property and its full potential, allowing them to make informed decisions about whether the property fits their specific needs. 
                            Choose HouseSnap to provide you with expert floor plans that will help you sell your property faster and for the best possible price.</p>
                        </div>
            </div>
                <div className=' flex items-center mt-5 flex-col lg:flex-row lg:ml-0 border-r-4'>
                    <video autoPlay muted loop >
                        <source src='https://res.cloudinary.com/dp86ovnda/video/upload/v1675721597/construction_02_m6ig6t.mp4' />
                    </video>
                    <div className='flex flex-col mt-10'>
                        <h1 className=' dark:text-white font-bold text-5xl px-10'>Breathtaking Drone Footage for one of our clients.</h1>
                        <h2 className=' dark:text-white font-bolt text-4xl px-10 mt-10'>Shot in 4k</h2>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Services