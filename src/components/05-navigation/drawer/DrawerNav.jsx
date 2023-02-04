// MUI components
import {
  Drawer,
  List,
  Box,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  IconButton,
  Divider
  } from '@mui/material'
// MUI icon
import MenuIcon from '@mui/icons-material/Menu'
// React components
import { Fragment, useState } from 'react'
import Link from 'next/link'

const DrawerNav = () => {

  // Drawer handle state __________ //
  const [ openDrawer, setOpenDrawer ] = useState( false)

  // links drawer  array __________ //
  const drawerLinks = [
    {
      name: 'inicio',
      href: '/'
    }, {
      name: 'nosotros',
      href: '/nosotros'
    }, {
      name: 'tratamiento',
      href: '/tratamiento'
    }
  ]

  return(

    <Fragment>

      <Drawer
        open={ openDrawer}
        onClose={ () =>  setOpenDrawer( false)}>

        <List sx={{ width: '60vw', px: '1em' }}>

          { drawerLinks.map( ( link, idx) => (

            <Link key={ idx} href={ link.href}>
              <Box>

                <ListItemButton href={ link.href}>

                  <ListItemIcon>

                    <ListItemText sx={{ pt: '0.5em' }}>
                      { link.name}
                    </ListItemText>
                  </ListItemIcon>
                </ListItemButton>
                <Divider />
              </Box>
            </Link>
          ))}
        </List>
      </Drawer>


      <IconButton
        size='large'
        edge='start'
        aria-label='menu'
        onClick={ () => setOpenDrawer( !openDrawer)}
        sx={{ ml: 'auto' }}>

        <MenuIcon />
      </IconButton>
    </Fragment>
  )
}

export default DrawerNav