// Components
import Layout from "components/06-layout/admin/Layout";
import InputText from "components/01-inputs/user/InputText";
// MUI components
import { Grid, Box, Typography } from "@mui/material";
import { TextField } from "@mui/material";

export default function AddAnimal() {
  return (
    <Layout title="Agregar un animal">
      <Grid container>
        <Grid
          item
          lg={4}
          sx={{
            display: "flex",
            alignItems: "center",
            height: "100vh",
            p: "1 0",
            textAlign: "center",
            backgroundImage: `url('/images/pages/home-page/banner.png')`,
          }}
        >
          <Typography variant="h2">AÑADE UN NUEVO EJEMPLAR</Typography>
        </Grid>

        <Grid item lg={8} sx={{ p: 1 }}>
          <Typography variant="h5">agregar un animal</Typography>

          <Box component="form" sx={{ mt: 2 }}>
            <InputText disabled={false} label="titulo del animal" helperText='helper text prueba'/>
          </Box>
        </Grid>
      </Grid>
    </Layout>
  );
}
