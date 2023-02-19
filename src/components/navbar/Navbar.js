import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import "./Navbar.css";
import { Link } from "react-scroll";
import cureplus from "./../../images/cureplus-old.png";
import cureplusWhite from "./../../images/cureplus-white.png";

const drawerWidth = 240;

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const [colorChange, setColorchange] = useState(false);

  const changeNavbarColor = () => {
    if (window.scrollY >= 200) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };

  window.addEventListener("scroll", changeNavbarColor);

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ height: "100vh", textAlign: "center" }}
    >
      <Typography variant="h6" sx={{ my: 2, color: "#000000" }}>
        CurePlus
      </Typography>
      <Divider />
      <List sx={{ textAlign: "center" }}>
        <ListItem disablePadding>
          <ListItemButton
            className="w-12/12"
            sx={{ textAlign: "center", color: "#000000" }}
          >
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Home
            </Link>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
            className="w-12/12"
            sx={{ textAlign: "center", color: "#000000" }}
          >
            <Link
              to="aboutus"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              About
            </Link>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
            className="w-12/12"
            sx={{ textAlign: "center", color: "#000000" }}
          >
            <Link
              to="services"
              spy={true}
              smooth={true}
              offset={-200}
              duration={500}
            >
              Services
            </Link>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
            className="w-12/12"
            sx={{ textAlign: "center", color: "#000000" }}
          >
            <Link
              to="contactus"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Contact
            </Link>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  // const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        component="nav"
        className={colorChange ? "appbar-solid" : "appbar-transparent"}
      >
        <Toolbar>
          {/* Menu Icon */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          {/* Website Name */}
          <Box
            display="flex"
            sx={{
              flexGrow: 1,
              marginLeft: {
                xs: "2%",
                sm: "6%",
                md: "7%",
                lg: "8%",
                display: { xs: "flex", sm: "flex" },
              },
            }}
          >
            <img
              alt="logo"
              src={colorChange ? cureplus : cureplusWhite}
              width="100"
            />
            {/* <a href="#home">
              <Typography
                display="inline"
                variant="h2"
                component="div"
                sx={{
                  color: "#05a300",
                  textAlign: { xs: "center", sm: "left", md: "left" },
                }}
              >
                Cure
              </Typography>
              <Typography
                display="inline"
                variant="h2"
                component="div"
                sx={{
                  color: "primary",
                  textAlign: { xs: "center", sm: "left", md: "left" },
                }}
              >
                Plus
              </Typography>
            </a> */}
          </Box>

          {/* Navigation Items */}
          <Box
            sx={{
              marginRight: "5%",
              flexGrow: 0,
              display: { xs: "none", sm: "block" },
            }}
          >
            <ul
              className="flex w-11/12  text-base cursor-pointer"
              sx={{ color: "inherit" }}
            >
              <li className="mx-2">
                <Link
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                >
                  Home
                </Link>
              </li>
              <li className="mx-2">
                <Link
                  to="aboutus"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                >
                  About
                </Link>
              </li>
              <li className="mx-2">
                <Link
                  to="services"
                  spy={true}
                  smooth={true}
                  offset={-200}
                  duration={500}
                >
                  Services
                </Link>
              </li>
              <li className="mx-2">
                <Link
                  to="contactus"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          // container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}
