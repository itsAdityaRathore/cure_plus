import React from "react";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";

function Map() {
  return (
    <>
      <Box className="sm:max-w-full h-60 mx-10 grid grid-flow-row">
        <iframe
          className="lg:h-60 min-w-fit sm:w-full sm:h-full py-1 "
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.7557472795083!2d77.68603051463575!3d12.987468218044294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae116ba8d2172f%3A0xb5fd18225a96023!2sCure%20Plus%20Homeopathy%20Clinic%20and%20Pharmacy!5e0!3m2!1sen!2sin!4v1675504758782!5m2!1sen!2sin"
          width="700"
          height="235"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          allowfullscreen=""
        ></iframe>
      </Box>
    </>
  );
}
export default Map;
