import { Box, Container, Paper, Typography } from "@mui/material";
import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { MdOutlineLocationOn } from "react-icons/md";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { MdCopyright } from "react-icons/md";

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
                <Typography className="font-semibold text-xl text-blue-500">
                  MENU
                </Typography>
                <h3 className="flex text-sm my-4 ">Home</h3>
                <h3 className="flex text-sm my-4 ">Services</h3>
                <h3 className="flex text-sm my-4 ">About</h3>
              </Paper>

              <Paper
                elevation={0}
                className=" bg-transparent mx-1 lg:my-0 text-white px-2 my-1 "
              >
                <Typography className="font-semibold text-xl text-blue-500">
                  CONTACT US
                </Typography>
                <h3 className="flex text-sm my-4 ">
                  <span>
                    <MdOutlineLocationOn className="text-xl mr-4" />
                  </span>
                  Shop E, BLOCK-C, Nester Raga, Dr. Puneetha Rajkumar Rd, B,
                  Chinappa Layout, Mahadevpura, Bengaluru, Karnatka - 560048
                </h3>
                <h3 className="flex text-sm my-4">
                  <span>
                    <MdOutlineEmail className="text-xl mr-4" />
                  </span>
                  dr.sweetysah@gmail.com
                </h3>
                <h3 className="flex text-sm my-4">
                  <span>
                    <MdOutlinePhoneInTalk className="text-xl mr-4" />
                  </span>
                  dr.sweetysah@gmail.com
                </h3>
              </Paper>
            </Box>
          </Box>
        </Box>
        <Box className="bg-gray-500 mt-1 p-2 flex justify-center">
          <h3 className="flex text-sm mt-4 items-center">
            <span>
              <MdCopyright className="text-2xl mx-1" />
            </span>
            Copyright 2022
          </h3>
        </Box>
      </footer>
    </>
  );
}

export default Footer;
