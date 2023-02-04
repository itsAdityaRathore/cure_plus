import React from "react";
import googleMapReact from "google-map-react";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";

const location = {
  address:
    "Shop E, BLOCK-C, Nester Raga, Dr. Puneetha Rajkumar Rd, B, Chinappa Layout, Mahadevpura, Bengaluru, Karnatka - 560048",
  lat: 37.42216,
  lng: -122.08427,
};

function Map() {
  return (
    <>
      <Box className="bg-red-500 absolute overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.7557472795083!2d77.68603051463575!3d12.987468218044294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae116ba8d2172f%3A0xb5fd18225a96023!2sCure%20Plus%20Homeopathy%20Clinic%20and%20Pharmacy!5e0!3m2!1sen!2sin!4v1675504758782!5m2!1sen!2sin"
          width="400"
          height="300"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          allowfullscreen=""
        ></iframe>
      </Box>
    </>
  );
}

export default Map;
