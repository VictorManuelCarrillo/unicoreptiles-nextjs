// MUI components
import {
  Card,
  CardMedia
  } from '@mui/material'

const CardImg = ( props) => {

  return(

    <Card sx={{
      minWidth: 150,
    }}>

      <CardMedia
        component='img'
        image={ props.image}
        alt={ props.alt}/>

    </Card>
  )
}

export default CardImg

// component props values

// image = 'string'
// alt = 'string'