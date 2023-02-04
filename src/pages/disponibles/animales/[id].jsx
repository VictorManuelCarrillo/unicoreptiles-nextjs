import Error from "next/error";

import Layout from "components/06-layout/user/Layout";
import PrimaryBtn from "components/01-inputs/button/PrimaryBtn";
import IconBtn from "components/01-inputs/button/IconBtn";
import BasicTooltip from "components/02-data-display/tooltip/BasicTooltip";

import { Container, Box, Grid, Paper, Typography, Divider, Breadcrumbs, Link, Tooltip } from "@mui/material";
// MUI ICONS ____________________ //
import MaleIcon from '@mui/icons-material/Male';
import FemaleIcon from '@mui/icons-material/Female';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';

import Image from "mui-image";

import ShareIcon from '@mui/icons-material/Share';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export default function AnimalDetail({ animal, error }) {

  const paymentMethods = [
    {
      name: 'visa',
      src: '/images/resources/payment/visa.png'
    },
    {
      name: 'mastercard',
      src: '/images/resources/payment/mastercard.png'
    },
    {
      name: 'clip',
      src: '/images/resources/payment/clip.png'
    }
  ]
  if (error && error.statusCode)
    return <Error statusCode={error.statusCode} title={error.statusText} />;

  return (
    <Layout>
      <Container maxWidth="lg" sx={{ p: 2 }}>

      <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 1}}>
        <Breadcrumbs>
          <Link href='/' underline='hover' color='lightblue'>Disponibles</Link>
          <Link href='/' underline='hover' color='lightblue'>Serpientes</Link>
          <Typography color='white'>Ejemplar</Typography>

        </Breadcrumbs>
        <Tooltip title='compartir'>
          <Box>

            <IconBtn icon={<ShareIcon sx={{color: 'white'}}/>} href='/' ariaLabel='share-button'/>
          </Box>
        </Tooltip>
      </Box>

        <Grid container spacing={1}>
          <Grid item xs={12} lg={8}>
            <Image src="/images/pages/home-page/banner.png" />
          </Grid>

          <Grid item lg={4}>
            <Paper sx={{ width: "100%", px: 3, py: 2, color: 'white', bgcolor: "primary.main" }}>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: "bold",
                  color: "white",
                  textTransform: "uppercase",
                }}
              >
                {animal.title}
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{ color: "lightgrey", fontWeight: "bold" }}
              >
                {animal.category}
              </Typography>
              <Box component='div' sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', py: 4}}>
                <Typography variant="h4" sx={{fontWeight: 'bold'}}>$ {animal.price}</Typography>
                {
                  animal.gender == 'male'
                  ? <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                      <Typography>Macho</Typography> <MaleIcon fontSize='large' sx={{color: '#0384fc'}}/>
                    </Box>
                  : ``
                }
                {
                  animal.gender == 'female'
                  ? <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                      <Typography>Hembra</Typography> <FemaleIcon fontSize='large' sx={{color: '#fc03d7'}}/>
                    </Box>
                  : ``
                }
                {
                  animal.gender == 'unknown'
                  ? <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                      <Typography>Sin sexar</Typography> <QuestionMarkIcon fontSize='large' sx={{color: '#9d03fc'}}/>
                    </Box>
                  : ``}
              </Box>

              <Typography variant="body1">{animal.description}.</Typography>

              <Typography sx={{paddingTop: 8}}><strong>FASE: </strong>{animal.morph}</Typography>
              <Typography><strong>EDAD: </strong>{animal.age}</Typography>

              <Box sx={{display: 'flex', justifyContent: 'center', my: 6}}>
                <PrimaryBtn text='pregunta por él' href='/' endIcon={<WhatsAppIcon/>}/>
              </Box>

              <Divider variant="middle" sx={{mx: 3, my: 6, bgcolor: 'lightgrey'}}/>

              <Box>
                <Typography><strong>MEDIOS DE PAGO</strong></Typography>

                <Grid container spacing={2}>
                  {paymentMethods.map((paymentMethod, idx) => (
                    <Grid item xs={12} sm={12} md={6} lg={4}>
                        <Image key={paymentMethod.idx} src={paymentMethod.src} height='100%'/>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
}

export async function getServerSideProps({ query: { id } }) {
  const res = await fetch(`http://localhost:3000/api/animals/${id}`);

  if (res.status === 200) {
    const animal = await res.json();

    return {
      props: {
        animal,
      },
    };
  }
  return {
    props: {
      error: {
        statusCode: res.status,
        statusText: "Invalid Id",
      },
    },
  };
}
