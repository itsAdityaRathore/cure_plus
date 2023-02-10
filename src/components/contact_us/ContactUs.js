import { Container, Stack, Box, Typography, styled } from "@mui/material";
import PhoneInTalkOutlinedIcon from "@mui/icons-material/PhoneInTalkOutlined";
import AccessAlarmRoundedIcon from "@mui/icons-material/AccessAlarmRounded";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import React from "react";
import "./ContactUs.css";
import { green } from "@mui/material/colors";

const IconBoxRound = styled(Box)({
  margin: 10,
  alignItems: "center",
  display: "flex",
  justifyContent: "center",
  minWidth: "40px",
  minHeight: "40px",
  border: "1px solid",
  borderRadius: 50,
  color: green[600],
  borderColor: "rgba(0 0 0 / 25%)",
});

function ContactUs() {
  return (
    <>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <Container
        maxWidth="md"
        className="contact-us-box"
        sx={{
          width: { xs: "90vw", sm: "90vw", md: "80vw" },
          marginTop: { md: "-4rem", xs: "-.5rem" },
        }}
      >
        <Stack direction={{ md: "row" }}>
          <Box
            flex={1}
            className="contact-us-box-item"
            sx={{ backgroundColor: "white" }}
          >
            <IconBoxRound>
              <PhoneInTalkOutlinedIcon />
            </IconBoxRound>
            <Box className="contact-us-box-text">
              <Typography variant="h5" marginBottom="3px" color="#9e9e9e">
                Phone No.
              </Typography>
              <Typography
                variant="body2"
                className="font-semibold"
                color="#353535"
              >
                +91-7676808586
              </Typography>
            </Box>
          </Box>
          <Box
            flex={1}
            className="contact-us-box-item bg-green-600"
            sx={{ color: "#fff" }}
          >
            <IconBoxRound sx={{ color: "#fff", borderColor: "#ffffff55" }}>
              <AccessAlarmRoundedIcon />
            </IconBoxRound>
            <Box className="contact-us-box-text">
              <Typography
                variant="h5"
                marginBottom="5px"
                sx={{ color: "#fff" }}
              >
                Open Hours
              </Typography>
              <Stack>
                <Typography variant="body2" className="font-semibold">
                  11:00 AM - 12:30 PM
                </Typography>
                <Typography
                  variant="body2"
                  lineHeight={2}
                  className="font-semibold"
                >
                  5:30 AM - 8:00 PM
                </Typography>
              </Stack>
            </Box>
          </Box>
          <Box
            flex={1}
            className="contact-us-box-item"
            sx={{ backgroundColor: "white" }}
          >
            <IconBoxRound>
              <LocationOnOutlinedIcon />
            </IconBoxRound>
            <Box className="contact-us-box-text">
              <Typography marginBottom="3px" variant="h5" color="#9e9e9e">
                Our Address
              </Typography>
              <Typography
                variant="body2"
                lineHeight={1.5}
                className="font-semibold"
                color="#353535"
              >
                Shop E, BLOCK-C, Nester Raga, Dr. Puneetha Rajkumar Rd, B,
                Chinappa Layout, Mahadevpura, Bengaluru, Karnatka - 560048
              </Typography>
            </Box>
          </Box>
        </Stack>
      </Container>
    </>
  );
}

export default ContactUs;
