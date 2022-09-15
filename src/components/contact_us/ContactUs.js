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
            <Typography
              marginBottom="3px"
              variant="subtitle2"
              fontFamily={"inherit"}
              color="#9e9e9e"
            >
              Phone No.
            </Typography>
            <Typography
              variant="inherit"
              fontFamily={"inherit"}
              color="#353535"
            >
              +91-7676808586
            </Typography>
          </Box>
        </Box>
        <Box
          flex={1}
          className="contact-us-box-item"
          sx={{ backgroundColor: "#599c2a", color: "#fff" }}
        >
          <IconBoxRound sx={{ color: "#fff", borderColor: "#ffffff55" }}>
            <AccessAlarmRoundedIcon />
          </IconBoxRound>
          <Box className="contact-us-box-text">
            <Typography
              marginBottom="3px"
              variant="subtitle2"
              fontFamily={"inherit"}
            >
              Open Hours
            </Typography>
            <Stack>
              <Typography variant="inherit" fontFamily={"inherit"}>
                11:00 AM - 12:30 PM
              </Typography>
              <Typography v variant="inherit" fontFamily={"inherit"}>
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
            <Typography
              marginBottom="3px"
              variant="subtitle2"
              fontFamily={"inherit"}
              color="#9e9e9e"
            >
              Our Address
            </Typography>
            <Typography
              variant="inherit"
              fontFamily={"inherit"}
              color="#353535"
            >
              Shop E, BLOCK-C, Nester Raga, Dr. Puneetha Rajkumar Rd, B,
              Chinappa Layout, Mahadevpura, Bengaluru, Karnatka - 560048
            </Typography>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
}

export default ContactUs;
