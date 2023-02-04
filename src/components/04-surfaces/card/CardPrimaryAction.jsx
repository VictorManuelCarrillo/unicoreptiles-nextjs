// MUI components invoycing ____________________ //
import{
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography
  } from '@mui/material'
// Next component
import Link from 'next/link'


const CardPrimaryAction = ( props) => {

  return (
    <Link href={ props.href}>
    
      <Card sx={{
        color: 'card.text',
        maxWidth: 450 }}>

        <CardActionArea>

          <CardMedia
            component='img'
            image={ props.image}
            alt={ props.alt}
            sx={{
              height: '25vh',
              transition: 'all 1s',
              '&:hover': {
                transform: 'scale(1.02)'
              }}}/>

            <CardContent sx={{ bgcolor: 'card.content' }}>

              <Typography variant='h5' component='div'>
                { props.title}
              </Typography>

              <Typography variant='body2'>
                { props.text}
              </Typography>
            </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  )
}

export default CardPrimaryAction

// component props values

// image = 'string'
// alt= 'string'
// title = 'text'
// text = 'text'