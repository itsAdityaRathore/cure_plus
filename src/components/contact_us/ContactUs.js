import { Container, Stack, Box, Divider, Typography } from '@mui/material'
import PhoneInTalkOutlinedIcon from '@mui/icons-material/PhoneInTalkOutlined';
import AccessAlarmRoundedIcon from '@mui/icons-material/AccessAlarmRounded';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
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
          <PhoneInTalkOutlinedIcon sx={{ paddingRight: 1 }} />
          <Container className="contact-us-box-text">
            <Typography variant='body1' className='contentText'>
            Phone No.
            </Typography>
            <Typography variant='caption'>
            +91-989898989
            </Typography>
          </Container>
        </Box>
        <Box flex={1} className="contact-us-box-item">
          <AccessAlarmRoundedIcon sx={{ paddingRight: 1 }} />
          <Container className="contact-us-box-text">
            <Typography variant='body1' className='contentText'>
              Open Hours
            </Typography>
            <Typography variant='caption'>
              9:00 am - 8:00 pm
            </Typography>
          </Container>
        </Box>
        <Box flex={1} className="contact-us-box-item">
          <LocationOnOutlinedIcon sx={{ paddingRight: 1 }} />
          <Container className="contact-us-box-text">
            <Typography variant='body1' className='contentText'>
              Our Address
            </Typography>
            <Typography variant='caption'>
              #3037 near shaifaly public school
              Ludhiana, Punjab
              141007
            </Typography>

          </Container>
        </Box>
      </Stack>
    </Container>
  )
}

export default ContactUs
