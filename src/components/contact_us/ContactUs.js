import { Container, Stack, Box, Typography, styled } from '@mui/material'
import PhoneInTalkOutlinedIcon from '@mui/icons-material/PhoneInTalkOutlined';
import AccessAlarmRoundedIcon from '@mui/icons-material/AccessAlarmRounded';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import React from 'react'
import './ContactUs.css'
import { green } from '@mui/material/colors';

const IconBoxRound = styled(Box)({
  margin:10,
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'center',
  minWidth: '40px',
  minHeight: '40px',
  border: '1px solid',
  borderRadius: 50,
  color: green[600],
  borderColor: 'rgba(0 0 0 / 25%)',
});

function ContactUs() {
  return (
    <Container maxWidth='md' className="contact-us-box" >
      <Stack
        direction={{ xs: 'column',sm:'column' , md:'row' }}
        spacing={2}
        sx={{ padding: 1 }}>

        <Box flex={1} className="contact-us-box-item" sx={{ backgroundColor: 'white' }}>
          <IconBoxRound>
            <PhoneInTalkOutlinedIcon />
          </IconBoxRound>
          <Box className="contact-us-box-text">
            <Typography variant='body1' className='contentText'>
              Phone No.
            </Typography>
            <Typography variant='caption'>
              +91-989898989
            </Typography>
          </Box>
        </Box>
        <Box flex={1} className="contact-us-box-item"
          sx={{ backgroundColor: '#599c2a' , color:'#fff'}}
        >
          <IconBoxRound sx={{color:'#fff', borderColor:'#ffffff55'}}>
            <AccessAlarmRoundedIcon />
          </IconBoxRound>
          <Box className="contact-us-box-text" >
            <Typography variant='body1' className='contentText'>
              Open Hours
            </Typography>
            <Typography variant='caption'>
              9:00 am - 8:00 pm
            </Typography>
          </Box>
        </Box>
        <Box flex={1} className="contact-us-box-item" sx={{ backgroundColor: 'white' }}>
          <IconBoxRound>
            <LocationOnOutlinedIcon />
          </IconBoxRound>
          <Box className="contact-us-box-text">
            <Typography variant='body1' className='contentText'>
              Our Address
            </Typography>
            <Typography variant='caption'>
              #3037 near shaifaly public school
              Ludhiana, Punjab
              141007
            </Typography>
          </Box>
        </Box>
      </Stack>
    </Container>
  )
}

export default ContactUs
