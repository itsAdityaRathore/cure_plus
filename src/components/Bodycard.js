import { Card } from '@mui/material'
import { Box, Container } from '@mui/system'
import React from 'react'
import '../../src/App.css'

function Bodycard() {
    return (
        <Container maxWidth='false' sx={{ background: '#20b255', height:'80vh' }}>
            <Box maxWidth='false' className='img' sx={{ backgroundImage: 'url(https://images.unsplash.com/photo-1661553914969-1c781d515fae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1361&q=80)' }}>
                
            </Box>
        </Container>
    )
}

export default Bodycard
