// components
import NavBar from '../../04-surfaces/appbar/NavBar'
import SpeedDialBtn from '../../05-navigation/speed-dial/SpeedDialBtn'
import Footer from '../box/Footer'
// React components
import { Fragment } from 'react'

import Head from 'next/head'

import {Box} from '@mui/material'

const Layout = ( { title, children}) => {

  return(
    <Fragment>
      <Head>
        <title>Único Reptiles | {title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name='author' content='Victor Manuel Carrillo Rojas'/>
        <meta name='keywords' content=''/>
      </Head>

  {/* Navbar component __________ */}
      <NavBar />
      <Box sx={{height: 60}}></Box>
  {/* children layout component __________ */}
      { children}
      <Box sx={{height: 60}}></Box>
  {/* SpeedDial component __________ */}
      <SpeedDialBtn />

  {/* Footer component __________ */}
      <Footer />
    </Fragment>
  )
}

export default Layout