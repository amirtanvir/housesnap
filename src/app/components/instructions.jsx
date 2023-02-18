import React from 'react'
import Link from 'next/link'

const Instructions = () => {
  return (
    <div id='instructions' className='py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6'>
        <section className="bg-white dark:bg-gray-800">

            <h1 className="mb-4 text-4xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">How we work.</span> </h1>
            <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">Here at HouseSnap, we want you to save as much time as possible. Attending photoshoots can waste a lot of time as well as
            reduce your availability for other viewings or important meetings.</p>

            <h1 className="mt-10 text-3xl font-extrabold text-gray-900 dark:text-white md:text-3xl lg:text-4xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Timeline</span> </h1>
        

            <ol className="mt-7 relative border-l border-gray-200 dark:border-gray-700">                  
                <li className="mb-10 ml-4">
                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Step 1</time>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Key Collection</h3>
                    <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">One of our photographers will visit your front-office at a time that suits you! Collect the key as well as any instructions on specifics of the address
                    .</p>
                </li>

                <li className="mb-10 ml-4">
                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Step 2</time>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Real Estate Photography</h3>
                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">Depending on the package, our expert photographers may take upto 2 hours in the flat. Capturing each room to its best potential, at this point we may recommend virtual staging if the location is unfurnished. </p>
                </li>
                
                <li className="mb-10 ml-4">
                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Step 3</time>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Key Return</h3>
                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">We will return your key as soon as possible. Which will typically be within 2-3 hours of the key collection.</p>
                </li>

                <li className="mb-10 ml-4">
                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Step 4</time>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Photos</h3>
                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">Our team will edit all of the photos to showcase the best lighting and to make certain features of the location POP!
                    This will then be sent to you in a Google Drive folder with Password Protection with all images in full resolution.</p>
                </li>
            </ol>

        </section>

        <section class="bg-white dark:bg-gray-900">
            <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-8 lg:px-8">
                <div class="mx-auto max-w-screen-sm text-center">
                    <h2 class="mb-4 text-4xl tracking-tight font-extrabold leading-tight text-gray-900 dark:text-white">Get in touch with us today!</h2>
                      <p class="mb-6 font-light text-gray-500 dark:text-gray-400 md:text-lg">Interested in a partnership ? Reduce your photography costs whilst maintaining quality!</p>
                    <Link href="http://localhost:3000/contact" class="text-white bg-blue-500 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">Contact Us</Link>
                </div>
            </div>
        </section>

    </div>
  )
}

export default Instructions