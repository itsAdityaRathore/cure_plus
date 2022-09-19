import { Container, Stack } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import "./AboutUs.css"

function AboutUs() {
    return (
        <Container className='about-us-box' sx={{ marginY: { md: "-33rem", xs: "-60rem" },color: { md: 'white', xs: 'white' } }}>
            <Stack direction={{ md: "row" }}>
                <Box className='about-us-content' display='flex'
                    sx={{}}>
                    <img className='dr-img' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRytX65eKyfPMKlTXg_xHv60IK5IGabz8omLg&usqp=CAU'></img>
                </Box>
                <Box className='about-us-content'
                    sx={{ width:'100%',  }}>
                    <h1>
                        Cure Plus Homeopathic Clinic - Go Green Inside
                    </h1>
                    Don’t be nervous, thinking that your disease is incurable, Just call us and get a FREE expert advice.
                </Box>
            </Stack>
        </Container>

    )
}

export default AboutUs
