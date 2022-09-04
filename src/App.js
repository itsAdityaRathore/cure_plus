import './App.css';
import * as React from 'react';
import Navbar from './components/Navbar';
import { StyledEngineProvider } from '@mui/material';
import BannerImage from './components/banner_image/BannerImage';
import ContactUs from './components/contact_us/ContactUs';

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <Navbar />
      <BannerImage />
      <ContactUs/>
    </StyledEngineProvider>
  );
}

export default App;


