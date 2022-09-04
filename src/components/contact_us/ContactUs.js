import { Container, Stack, Box, Divider } from '@mui/material'
import React from 'react'
import './ContactUs.css'

function ContactUs() {
  return (
    <Container maxWidth="md" className="contact-us-box" >
      <Stack
        direction={{ xs: 'column', sm: 'row' }} 
        divider={<Divider orientation="vertical" flexItem />} 
        spacing={1} 
        sx={{ padding: 1 }}>

        <Box flex={1} className="contact-us-box-item" >
          Phone No. - 989898989
        </Box>
        <Box flex={1} className="contact-us-box-item" >
          test
        </Box>
        <Box flex={1} className="contact-us-box-item" >
          test
        </Box>
        

      </Stack>
    </Container>
  )
}

export default ContactUs
