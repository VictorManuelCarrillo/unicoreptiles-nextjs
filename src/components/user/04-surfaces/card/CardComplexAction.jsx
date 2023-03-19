import {useRouter} from 'next/router';

// MUI COMPONENTS ____________________ //
import {
  Card,
  CardActionArea,
  CardHeader,
  CardMedia,
  CardContent,
  Box,
  Typography,
} from "@mui/material";
// MUI ICONS ____________________ //
import MaleIcon from '@mui/icons-material/Male';
import FemaleIcon from '@mui/icons-material/Female';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';

const CardComplexAction = (props) => {

  const router = useRouter();

  const styledTitle = props.title.charAt(0).toUpperCase()+props.title.slice(1);

  return (
    <Card onClick={() => router.push(`/disponibles/animales/${props.id}`)}>
      <CardActionArea>
        <CardHeader
          title={styledTitle}
          titleTypographyProps={{
            variant: "subtitle1",
            fontWeight: "bold",
            color: "white",
          }}
          subheader={props.category}
          subheaderTypographyProps={{ variant: "caption",  textTransform: 'uppercase', fontWeight: 'bold', color: "lightgrey" }}
          sx={{ px: 1, py: 0, bgcolor: "primary.main" }}
        />

        <CardMedia component='img' image={props.image} alt={props.title} title={props.title}/>
        {props.available == true ? `` : <div style={{position: "absolute", color: "red",top: 70,left: "50%",transform: "translateX(-50%)",}}>
          <Typography variant="subtitle1"><strong>NO DISPONIBLE</strong></Typography>
        </div>}

        <CardContent sx={{ minHeight: 200, px: 1, py: 1/2, color: 'white', bgcolor: 'primary.main' }}>

          <Box component='div' sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 1/2}}>
            <Typography variant="h4" sx={{fontWeight: 'bold'}}>${props.price}</Typography>
            {props.gender == 'male' ? <MaleIcon fontSize='large' sx={{color: '#0384fc'}}/> : ``}
            {props.gender == 'female' ? <FemaleIcon fontSize='large' sx={{color: '#fc03d7'}}/> : ``}
            {props.gender == 'unknown' ? <QuestionMarkIcon fontSize='large' sx={{color: '#9d03fc'}}/> : ``}
          </Box>
          <Typography variant="body2"><strong>EDAD: </strong>{props.age}</Typography>
          <Typography variant="body2"><strong>FASE: </strong>{props.morph}</Typography>
          <Typography variant="body2">{props.description}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CardComplexAction;

// // Component props ____________________ //
// //* Title:     String - ""
// //* Subheader: String - ""
// //* Image:     String - ""
// //* Content:   String - ""
