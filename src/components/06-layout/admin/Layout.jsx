// React components
import { Fragment } from "react";
// Next components
import Head from "next/head";
// Components
import NavBar from "components/04-surfaces/admin/appbar/NavBar";
// MUI components
import { Box } from "@mui/material";

const Layout = ({ title, children }) => {
  return (
    <Fragment>
      {/* Next Head ______________________________*/}
      <Head>
        <title>Administración de Página "Leonardo Basteri" | {title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="author" content="Victor Manuel Carrillo Rojas" />
        <meta name="keywords" content="" />
      </Head>

      {/* Navbar component ______________________________ */}
      <NavBar />
      <Box sx={{ height: 60 }}></Box>

      {/* Children layout prop component */}
      {children}
    </Fragment>
  );
};

export default Layout;
