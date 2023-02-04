// MUI Components
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  useTheme,
  useMediaQuery,
  Box,
} from "@mui/material";
// Next Components
import Link from "next/link";
// Components
import DrawerNav from "components/05-navigation/drawer/DrawerNav";
const NavBar = () => {
  // Links array
  const links = [
    { name: "inicio", href: "/" },
    { name: "disponibles", href: "/disponibles" },
    { name: "lagartos", href: "/lagartos" },
    { name: "serpientes", href: "/serpientes" },
    { name: "otros", href: "/otros" },
  ];

  // MUI useTheme
  const theme = useTheme();
  // Responsive query
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <AppBar sx={{height: 60}}>
      <Toolbar>
        {isMatch ? (
          <Box>
            <Typography>único Reptiles</Typography>
            <DrawerNav />
          </Box>
        ) : (
          <Box sx={{display: 'flex'}}>
            <Typography variant="h6">Único Reptiles</Typography>
            <Box sx={{mx: 6}}>
              {links.map((link, idx) => (
                <Link key={idx} href={link.href}>
                  <Button
                    color="inherit"
                    sx={{
                      fontWeight: 600,
                      transition: "0.5s",
                      borderRadius: 0,
                      "&:hover": { color: "white", bgcolor: "#00000020" },
                    }}
                  >
                    {link.name}
                  </Button>
                </Link>
              ))}
            </Box>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};
export default NavBar;