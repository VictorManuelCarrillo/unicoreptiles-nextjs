// MUI components invoycing ____________________ //
import {
  Box,
  Typography
  } from '@mui/material'


const SecondaryTitle = ( props) => {

  return (

    <Box sx={{
      m: 2,
      pl: 1,
      }}>
      
      <Typography
        variant='h4'
        fontWeight='bold'
        textAlign='center'
        sx={{ maxWidth: '90vw', mx: 'auto', color: 'secondary.main' }}>
        { props.title}
      </Typography>
    </Box>
  )
}

export default  SecondaryTitle

// Component props values

// title = 'string'