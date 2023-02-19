import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import { Box, Container, Paper, Typography, styled } from "@mui/material";
import React from "react";

const Paperitem = styled(Paper)`
  :hover {
    box-shadow: 1px 1px 15px #0000006c;
    animation: unset;
    margin-top :1vh;
    transform: perspective(1000px) rotateX(0deg) rotateY(0deg) rotateZ(0deg);
  .menu
    display: flex;
    justify-content: space-around;
    align-items :center;
    max-width: 100%;
    height; 100%;
  }
  width: 200px;
  height: 300px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20vh;
  margin-bottom: 50px;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 0 10px 20px 1px rgba(0, 0, 0, 0.1);
  transform-origin: center center 0px;
  transition: all 0.5s ease-out;
  animation-name: animate;
  animation-duration: 3s;
  animation-iteration-count: infinite;
  transform: perspective(1000px) rotateX(25deg) rotateY(4deg) rotateZ(-5deg);
  z-index: 1;

`;

function AboutDr() {
  return (
    <>
      <Container id="aboutus" maxWidth="lg" className="p-4 mt-5 md:my-10 flex">
        <Box className=" w-full p-2 grid grid-flow-row md:grid-cols-2 justify-center">
          <Box className="p-2 max-w-md mx-auto my-auto ">
            <img
              alt="dr"
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
                alt="pulse"
                className="h-24 w-15 mb-0 "
                src="https://t3.ftcdn.net/jpg/01/34/24/46/240_F_134244635_QdTMgtjMfLQealOg6WQSEc0UaRrxSrhj.jpg"
              />
              <Typography variant="h1">About US</Typography>
            </Box>

            <Typography variant="h3">Welcome To CurePlus Homeopathy</Typography>
            <Typography variant="subtitle1" className="pt-6">
              Established in 2011, is dedicated to the mission of creating a
              happier and healthier society by reviving the Homeopathic sciences
              through the use of modern technology. Our objective is to help
              each individual unleash his potential in the two basic realms of
              human endeavor health and culture.
            </Typography>
            <Paper className="bg-green-600 rounded-md px-6 py-10 justify-center h-54 my-8 text-base font-semibold ">
              <Container className="grid lg:grid-cols-2 gap-x-7  gap-y-5">
                <Box className="text-left   text-white flex">
                  <CheckCircleOutlineOutlinedIcon className="mr-2 mt-1" />
                  12+ years of excellence
                </Box>
                <Box className=" text-left    text-white flex">
                  <CheckCircleOutlineOutlinedIcon className="mr-2 mt-1" />
                  Multi Speciality
                </Box>
                <Box className=" text-left   text-white flex">
                  <CheckCircleOutlineOutlinedIcon className="mr-2 mt-1" />
                  24 Hours Medical Service
                </Box>
                <Box className=" text-left   text-white flex ">
                  <CheckCircleOutlineOutlinedIcon className="mr-2 mt-1" />
                  Professional Experts
                </Box>
              </Container>
            </Paper>
          </Paper>
        </Box>
      </Container>
    </>
  );
}
export default AboutDr;
