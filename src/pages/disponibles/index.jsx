import Layout from "../../components/06-layout/Layout";

import Link from "next/link";

import { Grid, Container, Box, Paper, Typography } from "@mui/material";

export default function HomePage({ animals }) {
  const animalPapers = [
    {
      category: "todos los animales",
      imageUrl: "../../../images/pages/disponibles/banner.png",
      link: "/disponibles/todos",
    },
    {
      category: "lagartos",
      imageUrl: "../../../images/pages/disponibles/banner.png",
      link: "/disponibles/todos",
    },
    {
      category: "serpientes",
      imageUrl: "../../../images/pages/disponibles/banner.png",
      link: "/disponibles/todos",
    },
    {
      category: "tortugas",
      imageUrl: "../../../images/pages/disponibles/banner.png",
      link: "/disponibles/todos",
    },
    {
      category: "anfibios",
      imageUrl: "../../../images/pages/disponibles/banner.png",
      link: "/disponibles/todos",
    },
  ];

  return (
    <Layout>
      <Grid container>
        <Grid
          item
          lg={4}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: { lg: "60vh" },
            textAlign: "center",
            bgcolor: "primary.main",
          }}
        >
          <Typography variant="h3">Ejemplares disponibles</Typography>{" "}
        </Grid>
        <Grid
          item
          lg={8}
          sx={{
            width: "100%",
            minHeight: { lg: "60vh" },
            backgroundImage: `url('../../../images/pages/disponibles/banner.png')`,
            backgroundSize: "cover",
          }}
        ></Grid>
      </Grid>

      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid
          container
          spacing={6}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          {animalPapers.map((animalPaper, idx) => (
            <Grid item key={idx} xs={12} sm={12} md={6} lg={6}>
              <Link href={animalPaper.link}>
                <Paper
                  elevation={4}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "40vh",
                  }}
                >
                  <Typography variant="h3">{animalPaper.category}</Typography>
                </Paper>
              </Link>
            </Grid>
          ))}
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
