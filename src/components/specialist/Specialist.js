import {
  Box,
  Container,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";
import Carousel from "../carousels/Carousel";

function Specialist() {
  return (
    <>
      <Container className=" my-20 py-2">
        <Box className="px-1 py-1  grid lg:grid-cols-3 gap-4 ">
          <Box className=" lg:col-span-2">
            <Carousel />
          </Box>
          <Box className=" rounded-md shadow-lg py-2 text-center bg-slate-200">
            <Typography variant="h4" className="text-center tracking-widest ">
              WORKING
            </Typography>
            <Typography
              variant="h4"
              className="text-center tracking-widest pb-2"
            >
              HOURS
            </Typography>
            <Table className="table-auto ">
              <TableHead className="">
                <TableRow>
                  <TableCell className="font-bold">Days</TableCell>
                  <TableCell className="font-bold">Timings(Morning)</TableCell>
                  <TableCell className="font-bold">Timings(Evening)</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>Monday</TableCell>
                  <TableCell>10:00AM - 1:00PM</TableCell>
                  <TableCell>5:00PM - 8:00PM</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Tuesday</TableCell>
                  <TableCell>10:00AM - 1:00PM</TableCell>
                  <TableCell>5:00PM - 8:00PM</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Wednesday</TableCell>
                  <TableCell>10:00AM - 1:00PM</TableCell>
                  <TableCell>5:00PM - 8:00PM</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Thursday</TableCell>
                  <TableCell>10:00AM - 1:00PM</TableCell>
                  <TableCell>5:00PM - 8:00PM</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Friday</TableCell>
                  <TableCell>10:00AM - 1:00PM</TableCell>
                  <TableCell>5:00PM - 8:00PM</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Saturday</TableCell>
                  <TableCell>10:00AM - 1:00PM</TableCell>
                  <TableCell>5:00PM - 8:00PM</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Box>
        </Box>
      </Container>
    </>
  );
}

export default Specialist;
