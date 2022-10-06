import { Box, Container, Typography } from "@mui/material";
import React from "react";
import LocalHospitalOutlinedIcon from "@mui/icons-material/LocalHospitalOutlined";

function Footer() {
  return (
    <>
      <footer className="bg-gray-800 text-white">
        <Box className="grid grid-col-4 md:flex md:items-center px-4 sm:px-12 py-8 bg-[ffffff19]">
          <h1 className="lg:text-3xl text-2xl xs:text-sm md:mb-0 mb-6 lg:leading-normal font-semibold md:w-2/5">
            <span className="text-blue-500">CURE</span>PLUS
          </h1>
          <Box>
            <h2 className="lg:text-2xl text-xl sm:first-letter:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2">
              <span className="text-cyan-500">Menu</span>
            </h2>
          </Box>
          <Box>
            <h2 className="lg:text-2xl text-xl sm:first-letter:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2">
              <span className="text-cyan-500">Useful Links</span>
            </h2>
          </Box>
          <Box>
            <h2 className="lg:text-2xl text-xl sm:first-letter:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2">
              <span className="text-cyan-500">ContactUs</span>
            </h2>
          </Box>
        </Box>
      </footer>
    </>
  );
}

export default Footer;
