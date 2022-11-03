import "./App.css";
import * as React from "react";
import Navbar from "./components/navbar/Navbar";
import { StyledEngineProvider } from "@mui/material";
import BannerImage from "./components/banner_image/BannerImage";
import ContactUs from "./components/contact_us/ContactUs";
import Footer from "./components/footer/Footer";
import CureFor from "./components/cure_for/CureFor";
import AboutDr from "./components/about_dr/AboutDr";
import Accordion from "./components/faq/Accordion";

const questionsAnswers = [
  {
    question: "How many team members can I invite?",
    answer:
      "You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.",
  },
  {
    question: "What is the maximum file upload size?",
    answer:
      "No more than 2GB. All files in your account must fit your allotted storage space.",
  },
  {
    question: "How do I reset my password?",
    answer: `Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.`,
  },
  {
    question: "Can I cancel my subscription?",
    answer: `Yes! Send us a message and we’ll process your request no questions asked.`,
  },
  {
    question: "Do you provide additional support?",
    answer: `Chat and email support is available 24/7. Phone lines are open during normal business hours.Chat and email support is available 24/7. Phone lines are open during normal business hours.Chat and email support is available 24/7. Phone lines are open during normal business hours.`,
  },
];

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <Navbar />
      <BannerImage />
      <ContactUs />
      <AboutDr />
      <CureFor />
      <Accordion questionsAnswers={questionsAnswers} />
      <Footer />
    </StyledEngineProvider>
  );
}

export default App;
