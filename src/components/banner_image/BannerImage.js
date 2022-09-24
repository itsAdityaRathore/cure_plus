import { Box, Container } from "@mui/system";
import React from "react";
import AboutUs from "../about_us/AboutUs";
import "./BannerImage.css";

function BannerImage() {
  return (
    <Container disableGutters="true" maxWidth="false" sx={{background: "#000", height: "80vh" }}>
      <Box
      width="100%"
        className="img"
        sx={{
          backgroundImage:
            "url( https://www.vithoulkas.com/sites/default/files/news/homeopathy-11.jpg)",
        }}
      ></Box>
      <AboutUs />
    </Container>
  );
}

export default BannerImage;
