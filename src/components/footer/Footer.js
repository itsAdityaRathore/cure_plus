import { Box, Paper, Typography } from "@mui/material";
import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { MdOutlineLocationOn } from "react-icons/md";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { MdCopyright } from "react-icons/md";
import cureplusWhite from "./../../images/cureplus-logo-white.png";

import Map from "../map/Maps";

function Footer() {
  return (
    <>
      <footer id="contactus" className="bg-gray-800 text-white pt-6 pb-5">
        <Box className=" grid lg:grid-flow-row grid-cols-3 px-10 ">
          <Box className="lg:col-span-1 md:col-span-2 col-span-3 pt-8 h-min">
            <Paper elevation={0} className=" bg-transparent px-2 py-1">
              <img alt="logo" src={cureplusWhite} width="150" />
              {/* <Typography variant="h3">
                <span className="text-green-500">CURE</span>
                <span className="text-white">PLUS</span>
              </Typography> */}
              <Typography variant="h4" className="text-gray-100 p-2">
                Find us on any of these platforms, we respond 1-2 business days.
              </Typography>
            </Paper>
          </Box>
          <Box className="lg:col-span-1 md:col-span-2 col-span-3 pt-8 ">
            <Paper
              elevation={0}
              className=" bg-transparent text-white py-1 px-2 "
            >
              <Typography variant="h4" className=" text-green-500">
                CONTACT US
              </Typography>
              <Typography variant="subtitle2" className="flex my-4">
                <span>
                  <MdOutlineLocationOn className="text-xl mr-4" />
                </span>
                <Typography className="max-w-sm">
                  CurePlus Homeopathy, Wing C, Nester Raga, Mahadevpura,
                  Bengaluru, Karnatka - 560048
                </Typography>
              </Typography>
              <Typography variant="subtitle2" className="flex my-4">
                <span>
                  <MdOutlineEmail className="text-xl mr-4" />
                </span>
                dr.sweetysah@gmail.com
              </Typography>
              <Typography variant="subtitle2" className="flex my-4">
                <span>
                  <MdOutlinePhoneInTalk className="text-xl mr-4" />
                </span>
                +91-7406125000
              </Typography>
            </Paper>
          </Box>
          <Box className="lg:col-span-1 md:col-span-2 col-span-3 pt-8">
            <Typography variant="h4" className="text-green-500 pb-4 pl-4">
              COME DO VISIT US
            </Typography>
            <Map />
          </Box>
        </Box>
        <Box className="bg-transparent  p-2 flex justify-center pt-10">
          <Typography className="flex items-center">
            <span>
              <MdCopyright className="text-xl mx-1" />
            </span>
            Copyright 2022
          </Typography>
        </Box>
      </footer>
    </>
  );
}

export default Footer;
