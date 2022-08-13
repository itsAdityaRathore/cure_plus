import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import LocalHospitalSharpIcon from '@mui/icons-material/LocalHospitalSharp';

const pages = ['About us', 'Services', 'Blog', 'Contact'];

const Navbar = () => {
    const [openNav, setopenNav] = React.useState(null);
   
    const handleOpenNavMenu = (event) => {
        setopenNav(event.currentTarget);
    };


    const handleCloseNavMenu = () => {
        setopenNav(null);
    };


    return (
        <AppBar position="static" sx={{ height: '65px', color: 'black', background: '#D85678' }}>
            <Container maxWidth="xl" >
                <Toolbar disableGutters>
                    <LocalHospitalSharpIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        CUREPLUS
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={openNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            // keepMounted
                            // transformOrigin={{
                            //     vertical: 'top',
                            //     horizontal: 'left',
                            // }}
                            open={Boolean(openNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">{page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <LocalHospitalSharpIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href=""
                        sx={{
                            my: 2,
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.7rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        CUREPLUS
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={handleCloseNavMenu}
                                sx={{
                                    ml: 4, my: 2, color: 'black', display: 'block', fontFamily: 'sans-serif',
                                    fontWeight: 500,
                                }}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>                  
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default Navbar;
