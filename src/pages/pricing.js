import '../app/globals.css'
import { useRouter } from 'next/router'
import Navbar from '@/app/components/navbar'
import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Footer from '@/app/components/footer';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Single Bed Package', 1, 'Yes', 'No', '£80'),
  createData('360° Virtual Tour', '2+', 'Yes', 'No', '£100'),
  createData('Full Single Bed Package', 1, 'Yes', 'Yes', '£120'),
  createData('Double+ Package', '2+', 'Yes', 'Yes', '£200'),
  createData('Premium Real Estate Package (Video Walkthrough + Photos + Basic Floor Plan)', '2+', 'Yes', 'Yes', '£240'),
  createData('Full Real Estate Package (Drone + Video Walkthrough + Photos + Virtual Tour + Basic Floor Plan)', 1, 'Yes', 'No', '£450'),
  createData('Virtual Staging', 'Per Room', 'Yes', 'No', 'Enquire'),
];



const Pricing = () => {
  return (
    <div>
        <Navbar/>
        <div className='mt-10 px-10'>
        <h1 className='mt-5 mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-5xl dark:text-gray-900' >Pricing</h1>
        <p className="mt-10 mb-6 text-lg font-normal text-gray-700 lg:text-xl dark:text-gray-600">Our goal is to offer transparent and flexible pricing to our clients.
         We believe in providing all of our pricing information upfront, so you can make informed decisions about your real estate photography needs.
         Our pricing structure is designed to offer you the flexibility you need to choose the services that best meet your specific requirements, 
         without any hidden fees or surprises. Trust HouseSnap to provide you with clear and straightforward pricing, allowing you to focus on 
         selling your property with confidence.</p>
        

            <TableContainer className='mt-10' component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Package</TableCell>
                            <TableCell align="right">Bedrooms</TableCell>
                            <TableCell align="right">Photo</TableCell>
                            <TableCell align="right">Video</TableCell>
                            <TableCell align="right">Price</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {rows.map((row) => (
                        <TableRow
                        key={row.name}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell component="th" scope="row">
                            {row.name}
                        </TableCell>
                        <TableCell align="right">{row.calories}</TableCell>
                        <TableCell align="right">{row.fat}</TableCell>
                        <TableCell align="right">{row.carbs}</TableCell>
                        <TableCell align="right">{row.protein}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>

          <p className='mt-5 mb-10'>The prices above should form as guidelines. Full quotation will be given after a request.</p>
        
        </div>
        <Footer/>
    </div>
  )
}

export default Pricing