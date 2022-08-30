import './App.css';
import * as React from 'react';
import Navbar from './components/Navbar';
import Bodycard from './components/Bodycard';
import { StyledEngineProvider } from '@mui/material';

function App() {
  return (

    <StyledEngineProvider injectFirst>
      <Navbar />
      <Bodycard />
    </StyledEngineProvider>

  );
}

export default App;


