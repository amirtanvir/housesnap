import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';
import Link from 'next/link';
import ReactPlayer from 'react-player';

const Hero = () => {
  return (
    <section className="bg-white dark:bg-gray-900">

        <div className='relative'>
              <Carousel autoPlay infiniteLoop 
                      showStatus={false} 
                      showIndicators={false}
                      showThumbs={false}>
                  <div>
                      <Image className='-z-50' src="https://res.cloudinary.com/dp86ovnda/image/upload/v1675715437/image3_vtpl2w.jpg" width={600} height={200} alt="image1"/>
                  </div>
                  <div>
                      <Image className='-z-50' src="https://res.cloudinary.com/dp86ovnda/image/upload/v1675715429/image1_jozsax.jpg" width={600} height={200} alt="image2" />
                  </div>
                  <div>
                      <Image className='-z-50' src="https://res.cloudinary.com/dp86ovnda/image/upload/v1675715430/image2_lxbhch.jpg" width={600} height={200} alt="image2" />
                  </div>
                  <div>
                      <Image className='-z-50' src="https://res.cloudinary.com/dp86ovnda/image/upload/v1675715431/image5_yllbgh.jpg" width={600} height={200} alt="image2" />
                  </div>
              </Carousel>
        </div>

        <h1 className="bg-gradient-to-r from-cyan-500 to-blue-500 py-2 px-2 sm:py-5 sm:px-5 sm:top-40 sm:right-0 absolute top-40 left-20 mb-4 text-3xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Elevating listings with stunning visuals.</h1>

        

        <div className=" py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
            <a href='/contact' className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700" role="alert">
                <span className="text-xs bg-blue-600 rounded-full text-white px-4 py-1.5 mr-3">New</span> <span className="text-sm font-medium">We can now support Virtual Staging! Enquire Now!</span> 
                <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
            </a>
            <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">At HouseSnap, we are deeply committed to ensuring that every property is captured in 
                                                                                                                its best light, showcasing its unique features and creating an immersive experience for potential buyers. Our team of skilled photographers leverages state-of-the-art equipment and techniques to create 
                                                                                                                visually stunning images that accurately represent the property. </p>
            <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                <a href="#" className="inline-flex justify-center items-center py-3 px-3 mr-4 text-base font-medium text-center text-gray-700 rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                    Our Services
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 ml-3">
                            <path fillRule="evenodd" d="M12 2.25a.75.75 0 01.75.75v16.19l6.22-6.22a.75.75 0 111.06 1.06l-7.5 7.5a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 111.06-1.06l6.22 6.22V3a.75.75 0 01.75-.75z" clipRule="evenodd" />
                        </svg>
                </a>
            </div>
            <div className=" mx-auto text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36">
                <span className="font-semibold text-gray-400 uppercase">PARTNERSHIPS</span>
                <div className="flex space-x-10 flex-wrap justify-center items-center mt-8 text-gray-500">

                    <a href="https://bexleyhomes.co.uk/" className=" lg:mb-0 opacity-40 hover:opacity-100">
                            <Image alt='Bexley Homes Logo' src='https://res.cloudinary.com/dp86ovnda/image/upload/v1675714147/Logo1080p_copy_2_t2a4uj.png' width={300} height={100}/>                    
                    </a>

                    <a href="http://bellegrovedevelopments.com/" className=" lg:mb-0 opacity-40 hover:opacity-100">
                            <Image alt='Bellegrove Developments Logo' src='https://res.cloudinary.com/dp86ovnda/image/upload/v1676378165/bdllogo_hr7lf6.png' width={165} height={100}/>                    
                    </a>
    
                </div>
            </div> 
        </div>

    </section>
  )
}

export default Hero