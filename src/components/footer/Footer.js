import { Box, Container, Paper, Typography } from "@mui/material";
import React from "react";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import LocalHospitalOutlinedIcon from "@mui/icons-material/LocalHospitalOutlined";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

const items = [
  {
    title: "MENU",
  },
  {
    title: "CONTACT",
  },
  {
    title: "BLOG",
  },
  {
    title: "USEFUL LINKS",
  },
];

function Footer() {
  return (
    <>
      <footer className="bg-gray-800 text-white">
        <Box className="grid grid-col-2 lg:grid-flow-col md:grid-flow-row px-4 py-8 mx-2">
          <Box className="lg:w-5/6 p-4">
            <Typography className="font-semibold lg:text-3xl text-2xl">
              <span className="text-blue-500">CURE</span>PLUS
            </Typography>
            <h5 class="text-lg mt-0 mb-2 text-gray-100">
              Find us on any of these platforms, we respond 1-2 business days.
            </h5>
          </Box>
          <Box className="lg:w-10/12 p-2 mx-auto ">
            <Box className="grid lg:grid-cols-2 p-1 lg:w-12/12 mx-auto">
              <Paper
                elevation={0}
                className=" bg-transparent mx-1 lg:my-0 text-white px-2 my-1"
              >
                <Typography className="font-semibold text-xl">MENU</Typography>
                <Box className="text-base">Home</Box>
                <Box className="text-base">Services</Box>
                <Box className="text-base">About</Box>
              </Paper>

              <Paper
                elevation={0}
                className=" bg-gray-500 mx-1 lg:my-0 text-white px-2 my-1 "
              >
                <Typography className="font-semibold text-xl">
                  CONTACT US
                </Typography>
                <h6 class="text-sm text-gray-100 flex">
                  Shop E, BLOCK-C, Nester Raga, Dr. Puneetha Rajkumar Rd, B,
                  Chinappa Layout, Mahadevpura, Bengaluru, Karnatka - 560048
                </h6>
              </Paper>
            </Box>
          </Box>
        </Box>
      </footer>
    </>
  );
}

export default Footer;
