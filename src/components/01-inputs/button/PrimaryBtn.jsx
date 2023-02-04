// MUI components
import Button from '@mui/material/Button'
// Next component
import Link from 'next/link'

const PrimaryBtn = ( props) => {

  return (
    <Link href={ props.href}>

      <Button
        variant='contained' 
        size='small'
        startIcon={ props.startIcon}
        endIcon={ props.endIcon}
        sx={{
          px: 4,
          paddingTop: 3/4,
          paddingBottom: 1/2,
          color: '#1f1f1f',
          bgcolor: 'button.primary.main',
          borderRadius: 5,
          fontWeight: 'bold'
        }}>

        { props.text}
      </Button>
    </Link>
  )
}

export default PrimaryBtn

// component props values

// text = 'string'
// href = 'string'
// size = 'string' -> small/medium(default)/large
// startIcon = <object>
// endtIcon = <object>