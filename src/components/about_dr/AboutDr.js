import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import { Box, Button, Container, Paper, Typography } from "@mui/material";
import React from "react";

function AboutDr() {
  return (
    <>
      <Container maxWidth="lg" className="p-4 my-5 md:my-10 flex">
        <Box className=" w-full p-2 grid grid-flow-row md:grid-cols-2 justify-center">
          <Box className="p-2 max-w-md mx-auto my-auto ">
            <img
              className="mx-auto "
              src="https://uploads-ssl.webflow.com/612f0db6f325207557e98bf1/6194a174b1e04b984e973ed4_doctor-with-record.png"
            ></img>
          </Box>
          <Paper
            elevation={0}
            className="bg-transparent py-4 px-4 my-1 md:w-12/12  md:mx-1"
          >
            <Box className="flex">
              <img
                className="h-20 w-15 mb-0 "
                src="https://t3.ftcdn.net/jpg/01/34/24/46/240_F_134244635_QdTMgtjMfLQealOg6WQSEc0UaRrxSrhj.jpg"
              />
              <Typography className="lg:text-4xl text-left text-2xl my-auto font-bold  ">
                About US
              </Typography>
            </Box>

            <h3 className="lg:text-3xl text-left text-xl font-medium ">
              Welcome To Doctorate Central Hospital
            </h3>
            <p className="text-lg py-5 leading-8 text-justify">
              Our team of highly trained professionals uses the latest healing
              technologies to restore you to pain-free health quickly and
              easily.
            </p>
            <Paper className="bg-blue-900 rounded-md p-2 justify-center h-2/4 my-8">
              <Container className="grid lg:grid-cols-2 gap-2 p-2 my-5 h-5/6">
                <Box className=" p-2 text-left text-2xl font-semibold font-sans text-white flex">
                  <CheckCircleOutlineOutlinedIcon className="mr-2 mt-1" />
                  20+ years of excellence
                </Box>
                <Box className="p-2 text-left  text-2xl font-semibold font-sans text-white flex">
                  <CheckCircleOutlineOutlinedIcon className="mr-2 mt-1" />
                  Multi Speciality
                </Box>
                <Box className=" p-2 text-left text-2xl font-semibold font-sans text-white flex">
                  <CheckCircleOutlineOutlinedIcon className="mr-2 mt-1" />
                  24 Hours Medical Service
                </Box>
                <Box className="p-2 text-left text-2xl font-semibold font-sans text-white flex ">
                  <CheckCircleOutlineOutlinedIcon className="mr-2 mt-1" />
                  Professional Experts
                </Box>
              </Container>
              {/* <Box className="bg-gray-500 mx-auto justify-center ">
                <Button className="bg-blue-500">hiii</Button>
              </Box> */}
              {/* <Button className="bg-blue-500 text-center text-white lg:mx-32 md:mx-24 my-12 p-4 ">
                About Dr Shah
              </Button> */}
            </Paper>
          </Paper>
        </Box>
      </Container>
    </>
  );
}
export default AboutDr;
