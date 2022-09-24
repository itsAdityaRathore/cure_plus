import { Container, Stack, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import "./AboutUs.css"

function AboutUs() {
    return (
        <Container className='about-us-box' sx={{ marginY: { md: "-33rem", xs: "-60rem" }, color: { md: 'white', xs: 'white' } }}>
            <Stack direction={{ md: "row" }}>
                <Box className='about-us-content' display='flex'
                    sx={{}}>
                    <img className='dr-img' src='https://images.theconversation.com/files/304957/original/file-20191203-66986-im7o5.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop'></img>
                </Box>
                <Box className='about-us-content'
                    sx={{ width: '100%', justifySelf: 'center' }}>
                    <Typography variant='h3' fontFamily={'inherit'} color='#ffffff'>
                        Cure Plus Homeopathic Clinic
                    </Typography>
                    <Typography variant='h6' fontFamily={'inherit'} color='#ffffff'>
                        Don’t be nervous, thinking that your disease is incurable, Just call us and get a FREE expert advice.
                    </Typography>
                    <Typography variant='h6' fontFamily={'inherit'} color='#ffffff' sx={{wordSpacing:'8px'}}>
                        - Go Green Inside
                    </Typography>
                </Box>
            </Stack>
        </Container>

    )
}

export default AboutUs
// https://images.theconversation.com/files/304957/original/file-20191203-66986-im7o5.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop