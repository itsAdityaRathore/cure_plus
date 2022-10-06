import { Box, Container, Typography } from "@mui/material";
import React from "react";
import LocalHospitalOutlinedIcon from "@mui/icons-material/LocalHospitalOutlined";

function Footer() {
  return (
    <>
      <footer className="bg-gray-50 mt-4 p-4 text-center text-xl font-medium font-serif">
        <span className="-mt-1"> © </span>
        <span> CurePlus </span>
        <span>
          <LocalHospitalOutlinedIcon className="-mt-1 justify-self-center" />
        </span>
      </footer>
    </>
  );
}

export default Footer;
