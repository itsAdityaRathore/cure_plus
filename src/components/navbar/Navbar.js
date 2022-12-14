import {
  AppBar,
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
  useScrollTrigger,
} from "@mui/material";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import "./Navbar.css";

const drawerWidth = 240;
const navItems = ["Home", "Services", "About", "Contact"];

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
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center", color: "#000000" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
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
            <Typography
              display="inline"
              variant="h5"
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
              variant="h5"
              component="div"
              sx={{
                color: "primary",
                textAlign: { xs: "center", sm: "left", md: "left" },
              }}
            >
              Plus
            </Typography>
          </Box>
          
          {/* Navigation Items */}
          <Box
            sx={{
              marginRight: "5%",
              flexGrow: 0,
              display: { xs: "none", sm: "block" },
            }}
          >
            {navItems.map((item) => (
              <Button key={item} sx={{ color: "inherit" }}>
                {item}
              </Button>
            ))}
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
