import './App.css';
import * as React from 'react';
import Navbar from './components/Navbar';
import Bodycard from './components/Bodycard';
import { StyledEngineProvider } from '@mui/material';
import ContactUs from './components/contact_us/ContactUs';

function App() {
  return (

    <StyledEngineProvider injectFirst>
      <Navbar />
      <Bodycard />
      <ContactUs/>
    </StyledEngineProvider>

  );
}

export default App;


