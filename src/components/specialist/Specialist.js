import { Box, Container, Typography } from "@mui/material";
import React from "react";

function Specialist() {
  return (
    <>
      <Container className=" my-12 py-2">
        <Box className="px-1 py-4 grid lg:grid-cols-3 gap-4 ">
          <Box className=" col-span-2 p-2">
            <Typography variant="h4" className="my-2">
              Specializations
            </Typography>
            Being a very small age, child is not able to express his symptoms
            clearly. He is more prone to small diseases it is necessary to take
            most care of choosing medicine for children
          </Box>
          <Box className="bg-green-600 text-white col-span-1 py-2">
            <Typography variant="h4" className="text-center tracking-widest  ">
              WORKING
            </Typography>
            <Typography variant="h4" className="text-center tracking-widest">
              HOURS
            </Typography>
            <Typography variant="h5" className="p-2 my-4 ">
              {/* <Box className="grid gap-3 grid-cols-3 font-semibold">
                <Box className=" col-span-1"></Box>
                <Box className="col-span-1">MORNING</Box>
                <Box className=" col-span-1">EVENING</Box>
              </Box> */}
              <Box className="grid grid-cols-3 pt-2">
                <Box className=" col-span-1">Monday</Box>
                <Box className="col-span-1">8:00AM - 1:00PM</Box>
                <Box className="col-span-1">5:00PM - 8:00PM</Box>
              </Box>
              <Box className="grid  grid-cols-3 py-1">
                <Box className="col-span-1">Tuesday</Box>
                <Box className="col-span-1">8:00AM - 1:00PM</Box>
                <Box className="col-span-1">5:00PM - 8:00PM</Box>
              </Box>
              <Box className="grid grid-cols-3 py-1">
                <Box className="col-span-1">Wednesday</Box>
                <Box className="col-span-1">8:00AM - 1:00PM</Box>
                <Box className="col-span-1">5:00PM - 8:00PM</Box>
              </Box>
              <Box className="grid grid-cols-3 py-1">
                <Box className="col-span-1">Thursday</Box>
                <Box className="col-span-1">8:00AM - 1:00PM</Box>
                <Box className="col-span-1">5:00PM - 8:00PM</Box>
              </Box>
              <Box className="grid  grid-cols-3 py-1">
                <Box className="col-span-1">Friday</Box>
                <Box className="col-span-1">8:00AM - 1:00PM</Box>
                <Box className="col-span-1">5:00PM - 8:00PM</Box>
              </Box>
            </Typography>
          </Box>
        </Box>
      </Container>
    </>
  );
}

export default Specialist;
