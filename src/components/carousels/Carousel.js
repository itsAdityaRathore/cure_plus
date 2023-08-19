import { Box, Button } from "@mui/material";
import React from "react";

var imageslist = [
  {
    url: "https://images.healthshots.com/healthshots/en/uploads/2023/05/02135335/homeopathy.jpg",
    alt: "image1",
  },
  {
    url: "https://images.healthshots.com/healthshots/en/uploads/2023/05/02135335/homeopathy.jpg",
    alt: "image2",
  },
  {
    url: "https://images.healthshots.com/healthshots/en/uploads/2023/05/02135335/homeopathy.jpg",
    alt: "image3",
  },
  {
    url: "https://images.healthshots.com/healthshots/en/uploads/2023/05/02135335/homeopathy.jpg",
    alt: "image4",
  },
];

function Carousel() {
  return (
    <>
      <Box className="h-full w-full p-0.5">
        <Carouselcard url={imageslist[0].url} alt={imageslist[0].alt} />
        {/* <Carouselcard url={imageslist[1].url} alt={imageslist[1].alt} />
        <Carouselcard url={imageslist[2].url} alt={imageslist[2].alt} />
        <Carouselcard url={imageslist[3].url} alt={imageslist[3].alt} /> */}
      </Box>
    </>
  );
}

export default Carousel;

function Carouselcard({ url, alt }) {
  return (
    <>
      <Box className="flex justify-between h-full">
        <Box className="self-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="20"
            viewBox="0 96 960 960"
            width="20"
          >
            <path d="M400 976 0 576l400-400 56 57-343 343 343 343-56 57Z" />
          </svg>
        </Box>
        <Box className="content-center">
          <img alt={alt} src={url} />
        </Box>
        <Box className="self-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="20"
            viewBox="0 96 960 960"
            width="20"
          >
            <path d="m304 974-56-57 343-343-343-343 56-57 400 400-400 400Z" />
          </svg>
        </Box>
      </Box>
    </>
  );
}
