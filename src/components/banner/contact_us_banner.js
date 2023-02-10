import React from "react";
import { Button, Paper, Typography } from "@mui/material";

export default function ContactUsBanner() {
  return (
    <>
      <Paper
        elevation={0}
        square={true}
        sx={{ paddingX: { xs: "1rem" } }}
        className="lg:px-28 md:px-20 sm:px-16  py-10 bg-green-600 flex justify-between "
      >
        <Paper
          className="grid lg:grid-flow-row grid-cols-1 bg-transparent text-white pr-10"
          elevation={0}
        >
          <Typography variant="h4" className="mb-5">
            Intrested?
          </Typography>
          <Typography variant="h3 sm:h5 " className="font-bold">
            CONTACT US AND SCHEDULE YOUR VISIT
          </Typography>
        </Paper>
        <Button
          variant="contained"
          disableElevation="true"
          className="rounded-none bg-white text-green-600 font-bold hover:bg-white min-w-fit max-h-9 mt-5 p-4 mr-2"
        >
          CONTACT US
        </Button>
      </Paper>
    </>
  );
}
