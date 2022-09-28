import { Box } from "@mui/system";
import React from "react";
import AboutUs from "../about_us/AboutUs";
import "./BannerImage.css";

function BannerImage() {
  return (
    <Box className="banner-box">
      <Box
        width="100%"
        className="img"
        sx={{
          display: "flex",
          justifyContent: "center",
             }}
      >
        <AboutUs />
      </Box>
    </Box>
  );
}

export default BannerImage;
