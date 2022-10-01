import "./App.css";
import * as React from "react";
import Navbar from "./components/navbar/Navbar";
import { StyledEngineProvider } from "@mui/material";
import BannerImage from "./components/banner_image/BannerImage";
import ContactUs from "./components/contact_us/ContactUs";
import Services from "./components/services/Services";

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <Navbar />
      <BannerImage />
      <ContactUs />
      <Services />       
    </StyledEngineProvider>
  );
}

export default App;
