import Layout from "../components/06-layout/user/Layout";

import Link from "next/link";

import PrimaryTitle from "../components/02-data-display/typography/PrimaryTitle";
import CardComplexAction from "../components/04-surfaces/card/CardComplexAction";

import { Grid, Container, Box, Paper, Typography } from "@mui/material";

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export default function HomePage({ animals }) {
  return (
    <Layout>
      {/* BANNER SECTION ____________________ */}
      <Grid container>
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={4}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            p: 1,
            minHeight: { xs: "20vh", sm: "30vh", md: "60vh", lg: "50vh" },
            bgcolor: "secondary.main",
          }}
        >
          <Box sx={{ textAlign: "center" }}>
            <Typography variant="h1">ÚNICO REPTILES</Typography>
            <Typography variant="body">
              comercializadora legal de especies exóticas
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={8}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            p: 1,
            minHeight: { xs: "40vh", sm: "40vh", md: "60vh", lg: "50vh" },
            backgroundImage: `url('../images/pages/home-page/banner.png')`,
            backgroundSize: "cover",
            backgroundPosition: "top",
          }}
        >
          <Box>
            <Typography variant="h3">NOSOTROS SOMOS TU MEJOR OPCIÓN</Typography>
            <Typography variant="h6">
              PRESTIGIO, EXPERIENCIA Y CALIDAD ANIMAL
            </Typography>
            <br />
            <Typography variant="h5">
              CON NOSOTROS SE DIFERENTE, SE ORIGINAL...{" "}
              <strong>SE ÚNICO REPTILES</strong>
            </Typography>
          </Box>
        </Grid>
      </Grid>

      {/* SOCIAL SECTION ____________________ */}
      <Container maxWidth='md' sx={{p: 2}}>
        <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={6} lg={3}>
            <Link href='google.com'>
                <Paper elevation={4} sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', p: 1, color: 'white', bgcolor: '#3b5998'}}>
                <FacebookIcon sx={{marginRight: 2}}/>
                <Typography variant="h5" color="initial">Facebook</Typography>
              </Paper>
            </Link>
          </Grid>

        <Grid item xs={12} sm={12} md={6} lg={3}>
          <Link href='https://google.com'>
            <Paper elevation={4} sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', p: 1, color: 'white', bgcolor: '#405DE6'}}>
              <InstagramIcon sx={{marginRight: 2}}/>
              <Typography variant="h5" color="initial">Instagram</Typography>
            </Paper>
          </Link>
        </Grid>

        <Grid item xs={12} sm={12} md={6} lg={3}>
          <Link href='https://google.com'>
            <Paper elevation={4} sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', p: 1, color: 'white', bgcolor: '#4a80f5'}}>
              <FmdGoodIcon sx={{marginRight: 2}}/>
              <Typography variant="h5" color="initial">Maps</Typography>
            </Paper>
          </Link>
        </Grid>

        <Grid item xs={12} sm={12} md={6} lg={3}>
          <Link href='https://google.com'>
            <Paper elevation={4} sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', p: 1, color: 'white', bgcolor: '#075e54'}}>
              <FmdGoodIcon sx={{marginRight: 2}}/>
              <Typography variant="h5" color="initial">WhatsApp</Typography>
            </Paper>
          </Link>
        </Grid>

        </Grid>
      </Container>

      {/* DISPONIBLES SECTION _____________________ */}

      <Container maxWidth="lg">
        <PrimaryTitle title="nuestros ejemplares" />
        <Grid
          container
          spacing={2}
          sx={{ display: "flex", justifyContent: "center", py: 6 }}
        >
          {animals.slice(0, 4).map((animal, idx) => (
            <Grid item key={idx} xs={12} sm={6} md={4} lg={3}>
              <CardComplexAction
                id={animal._id}
                title={animal.title}
                category='lagartos'
                gender='unknown'
                age='adulto'
                morph='nominal, ht black'
                description={animal.description}
                price='3500'
                image="../images/pages/home-page/banner.png"
                available={false}
              />
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* STORE SECTION ____________________ */}
      <Container maxWidth="lg">
        <PrimaryTitle title="visita nuestra tienda física" />
        <Grid container>
          <Grid
            item
            xs={12}
            sm={12}
            md={4}
            lg={5}
            sx={{ p: 4, bgcolor: "secondary.main" }}
          >
            <Typography
              variant="h4"
              sx={{ textAlign: "center", fontWeight: "bold" }}
            >
              VISITA NUESTRA TIENDA FÍSICA
            </Typography>
            <br />
            <br />
            <Typography>
              Visítanos en nuestra sucursal en <strong>Calle Nuevo Mundo #2381</strong> y descubre los ejemplares que tenemos disponibles para tí.
              <br />
              <br />
              Nuestro horarios:
              <br />
              <strong>Lun - Dom: 14:00 - 20:00</strong>
              <br />
              <br />
              <strong>También puedes buscarnos por Google Maps</strong>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={8} lg={7}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3733.5642024750205!2d-103.37483464989555!3d20.646612886138914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428adec2b9b09dd%3A0xa857fdb244996ae1!2sC.%20Nuevo%20Mundo%202381%2C%20Col%C3%B3n%2C%2044920%20Guadalajara%2C%20Jal.!5e0!3m2!1ses-419!2smx!4v1674851647217!5m2!1ses-419!2smx" width="100%" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
}

export const getServerSideProps = async (ctx) => {
  const res = await fetch(`http://localhost:3000/api/animals`);
  const animals = await res.json();

  return {
    props: {
      animals,
    },
  };
};