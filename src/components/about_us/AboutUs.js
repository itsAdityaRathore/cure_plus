import { Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import "./AboutUs.css";

function AboutUs() {
  return (
    <Box className="about-us-box" sx={{ color: { md: "white", xs: "white" } }}>
      <Stack
        direction={{ md: "row" }}
        sx={{ marginY: { md: "0rem", xs: "2rem" } }}
      >
        <Box
          data-aos="zoom-out"
          data-aos-duration="1000"
          className="about-us-content drop-shadow"
          display="flex"
          sx={{}}
        >
          <img
            className="dr-img"
            src="https://images.theconversation.com/files/304957/original/file-20191203-66986-im7o5.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop"
            alt="doctor"
          ></img>
        </Box>
        <Box
          data-aos="zoom-out"
          data-aos-duration="1000"
          className="about-us-content about-us-text"
          sx={{ justifySelf: "center" }}
        >
          <Typography
            sx={{ typography: { lg: "h1", md: "h2", sm: "h2", xs: "h3" } }}
            color="#ffffff"
          >
            Cure Plus Homeopathic Clinic
          </Typography>
          <Typography
            sx={{ typography: { lg: "h3", md: "h4", sm: "h4", xs: "h5" } }}
            color="#ffffff"
          >
            Don’t be nervous, thinking that your disease is incurable, Just call
            us and get a FREE expert advice.
          </Typography>
          <Typography variant="h5" color="#ffffff" sx={{ wordSpacing: "5px" }}>
            - Go Green Inside
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
}

export default AboutUs;
// https://images.theconversation.com/files/304957/original/file-20191203-66986-im7o5.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop
// https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRytX65eKyfPMKlTXg_xHv60IK5IGabz8omLg&usqp=CAU
