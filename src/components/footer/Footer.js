import { Box, Paper, Typography } from "@mui/material";
import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { MdOutlineLocationOn } from "react-icons/md";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { MdCopyright } from "react-icons/md";
import Map from "../map/Maps";

function Footer() {
  return (
    <>
      <footer id="contactus" className="bg-gray-800 text-white pt-10">
        <Box className=" grid lg:grid-flow-row grid-cols-4 ">
          <Box className="lg:col-span-1 md:col-span-2 col-span-3 my-1 px-1 mx-1 h-min">
            <Paper elevation={0} className=" bg-transparent px-2 py-1">
              <Typography className="font-semibold lg:text-xl text-base">
                <span className="text-blue-500">CURE</span>
                <span className="text-white">PLUS</span>
              </Typography>
              <h5 class="text-base mt-0 mb-2 text-gray-100">
                Find us on any of these platforms, we respond 1-2 business days.
              </h5>
            </Paper>
          </Box>
          <Box className="lg:col-span-1 md:col-span-3 col-span-4 my-1 mx-1 ">
            <Paper
              elevation={0}
              className=" bg-transparent text-white py-1 px-2 "
            >
              <Typography className="font-semibold text-base text-blue-500">
                CONTACT US
              </Typography>
              <h3 className="flex text-sm my-4 ">
                <span>
                  <MdOutlineLocationOn className="text-xl mr-4" />
                </span>
                <p className="max-w-sm text-sm">
                  Shop E, BLOCK-C, Nester Raga, Dr. Puneetha Rajkumar Rd, B,
                  Chinappa Layout, Mahadevpura, Bengaluru, Karnatka - 560048
                </p>
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
                +91-7676808586
              </h3>
            </Paper>
          </Box>
          <Box className="lg:col-span-2 md:col-span-4 col-span-4 my-1 mx-1">
            <Typography className="font-semibold text-base text-blue-500 lg:pl-9 sm:pl-2">
              COME DO VISIT US
            </Typography>
            <Map />
          </Box>
        </Box>
        <Box className="bg-transparent  p-2 flex justify-center">
          <h3 className="flex text-sm  items-center">
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
