// MUI components
import {
  Box,
  Typography
  } from '@mui/material'

const PrimaryTitle = ( props) => {

  return (

    <Box sx={{
      maxWidth: '70vw',
      m: 3,
      pl: 1,
      borderLeft: '1em solid',
      borderColor: 'primary.main'
      }}>
      
      <Typography
        variant='h3'
        fontWeight='bold'
        textTransform='capitalize'>

        { props.title}
      </Typography>
    </Box>
  )
}

export default  PrimaryTitle

//! Component props values ____________________ //
//* title = 'string'