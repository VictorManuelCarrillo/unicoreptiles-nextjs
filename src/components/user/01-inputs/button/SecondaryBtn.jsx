// MUI components
import Button from '@mui/material/Button'
// Next component
import Link from 'next/link'

const SecondaryBtn = ( props) => {

  return (

    <Link href={ props.href}>

      <Button
        variant='outlined'
        size={ props.size}
        startIcon={ props.startIcon}
        endIcon={ props.endIcon}
        sx={{
          mx: 1,
          my: 1,
          fontWeight: 'bold',
          border: '0.2em solid',
          borderColor: 'button.secondary.main',
          borderRadius: 2,
          color: 'button.secondary.main',
          transition: 'all 0.5s',
          '&:hover': {
            color: 'common.white',
            bgcolor: 'button.secondary.main',
            border: '0.2em solid',
            borderColor: 'button.secondary.main'
          }}}>

        { props.text}
      </Button>
    </Link>
  )
}

export default SecondaryBtn

// component props values

// text = 'string'
// href = 'string'
// size = 'string' -> small/medium(default)/large
// startIcon = <object>
// endtIcon = <object>