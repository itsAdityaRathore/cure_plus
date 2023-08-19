import "./App.css";
import * as React from "react";
import Navbar from "./components/navbar/Navbar";
import {
  StyledEngineProvider,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import BannerImage from "./components/banner_image/BannerImage";
import ContactUs from "./components/contact_us/ContactUs";
import Footer from "./components/footer/Footer";
import CureFor from "./components/cure_for/CureFor";
import AboutDr from "./components/about_dr/AboutDr";
import Accordion from "./components/faq/Accordion";
import theme from "./theme/theme";
import ContactUsBanner from "./components/banner/contact_us_banner";
import Specialist from "./components/specialist/Specialist";
const questionsAnswers = [
  {
    question: "Where does Dr. Sweety Sah practice?",
    answer:
      "Dr. Sweety Sah practices at Cure Plus Homeopathy Clinic - Mahadevapura. The doctor also provides online video consultation.",
  },
  {
    question: "How can I take Dr. Sweety Sah's appointment ?",
    answer:
      "You can take Dr. Sweety Sah's appointment onlineon call with the doctor.",
  },
  {
    question: "Why do patients visit Dr. Sweety Sah?",
    answer: `Patients frequently visit Dr. Sweety Sah for Skin Tag Treatment, Kidney Stone Treatment, Development Assessment.`,
  },
  {
    question: "What is Dr. Sweety Sah's education qualification?",
    answer: `Dr. Sweety Sah has the following qualifications - BHMS, PG HOM (UK).`,
  },
];
function App() {
  return (
    <ThemeProvider theme={createTheme(theme)}>
      <StyledEngineProvider injectFirst>
        <Navbar />
        <BannerImage />
        <ContactUs />
        <AboutDr />
        <CureFor />
        <ContactUsBanner />
        <Specialist />
        <Accordion questionsAnswers={questionsAnswers} />
        <Footer />
      </StyledEngineProvider>
    </ThemeProvider>
  );
}

export default App;
