import { Card } from '@mui/material'
import { Box, Container } from '@mui/system'
import React from 'react'
import '../../src/App.css'


function Bodycard() {
    return (
        <Container maxWidth='false' sx={{ background: '#20b255', height:'80vh' }}>
            <Box maxWidth='false' className='img' sx={{ backgroundImage: 'url( https://www.vithoulkas.com/sites/default/files/news/homeopathy-11.jpg)' }}>
                
            </Box>
        </Container>
    )
}

export default Bodycard
