import "./App.css";
import * as React from "react";
import Navbar from "./components/navbar/Navbar";
import { StyledEngineProvider } from "@mui/material";
import BannerImage from "./components/banner_image/BannerImage";
import ContactUs from "./components/contact_us/ContactUs";
import CureFor from "./components/cure_for/CureFor";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <Navbar />
      <BannerImage />
      <ContactUs />
      <CureFor />
      <Footer />
    </StyledEngineProvider>
  );
}

export default App;
