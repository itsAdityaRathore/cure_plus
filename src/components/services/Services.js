import { Box } from '@mui/material'
import { Container, Stack } from '@mui/system'
import React from 'react'
import "./Services.css"

function Services() {
    return (
        <Box className='service-box'>
            <Container className='service-box-container' sx={{}}>
                <Stack
                    direction={{ md: 'row', xs: 'column' }}
                >
                    <Box className='service-box-card' sx={{ backgroundColor: 'lightblue', }}>
                        Different services cards
                        {/* height for box above image */}
                        {/* <Box  sx={{ backgroundColor: 'gray', height:'50%', width:'50%' }}>
                            <img className='service-card-icon' src='https://e7.pngegg.com/pngimages/653/624/png-clipart-computer-icons-mind-thought-logo-prototype-miscellaneous-psychology.png'></img>  
                        </Box>
                        <Box>
                            hello
                        </Box> */}
                    </Box>
                    <Box className='service-box-card' sx={{ backgroundColor: 'green' }}>
                        Different services cards
                    </Box>
                    <Box className='service-box-card' sx={{ backgroundColor: 'green' }}>
                        Different services cards
                    </Box>
                    <Box className='service-box-card' sx={{ backgroundColor: 'green' }}>
                        Different services cards
                    </Box>
                </Stack>
            </Container>

        </Box >
    )
}

export default Services
