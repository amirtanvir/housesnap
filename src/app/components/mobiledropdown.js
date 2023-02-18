import React from 'react'

const MobileDropdown = () => {
  return (
    <div className='bg-white dark:bg-gray-800 animate-text shadow-md rounded-md text-gray-200 absolute transition-opacity right-10 z-100'>
        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
            <li>
                <a href="#" className="block px-8 py-3 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
            </li>
            <li>
                <a href="#" className="block px-8 py-3 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
            </li>
            <li>
                <a href="#" className="block px-8 py-3 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
            </li>
            <li>
                <a href="#" className="block px-8 py-3 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
            </li>
        </ul>  
    </div>
  )
}

export default MobileDropdown