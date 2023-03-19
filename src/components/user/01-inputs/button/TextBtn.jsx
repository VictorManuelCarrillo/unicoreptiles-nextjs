// MUI components
import Button from '@mui/material/Button'
// Next component
import Link from 'next/link'

const TextBtn = ( props) => {

  return (

    <Link href={ props.href}>
    
      <Button
        variant='text' 
        size={ props.size}
        startIcon={ props.startIcon}
        endIcon={ props.endIcon}
        sx={{
          px: 1,
          mx: 0.2,
          fontWeight: 'bold',
          color: 'button.text.main',
          transition: 'all 0.5s',
          '&:hover': {
            color: 'button.text.light',
            bgcolor: 'none'
          }
        }}>

        { props.text}
      </Button>
    </Link>
  )
}

export default TextBtn

// Component props values

// text = 'string'
// href = 'string'
// size= 'string' -> small/medium(default)/large
// startIcon = <object>
// endIcon = <object>