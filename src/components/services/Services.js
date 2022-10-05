import { Avatar, Box, Container, Paper, styled } from "@mui/material";
import React from "react";

const Paperitem = styled(Paper)`
  :hover {
    box-shadow: 1px 1px 15px #0000006c;
  }
  border-radius: 12px;
  text-align: center;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  height: 50vh;
`;
Paperitem.defaultProps = { elevation: 8 };

function Services() {
  return (
    <>
      <Container className="my-10 p-4 lg:grid-cols-3 md:grid grid-cols-2 gap-3 sm:columns-2">
        <Box className="mt-16 min-w-200">
          <Paper
            elevation="5"
            className="py-4 px-5 text-center rounded-xl m-5 bg-gradient-to-b from-teal-50"
          >
            <Box
              width={100}
              height={100}
              className="relative mx-auto  bg-gradient-to-b
             from-yellow-200 rounded-full -mt-12 overflow-hidden shadow-md shadow-slate-400"
            >
              <img
                alt="img"
                className="object-cover fill"
                src="https://picsum.photos/100"
              />
            </Box>
            <h4 className="text-xl py-4">Skin</h4>
            <p className="max-w-md mx-auto">
              Objectively integrate enterprise-wide strategic theme areas with
              functionalized infrastructures.
            </p>
            <h2 className="pt-5 text-violet-600 font-medium">+ READMORE</h2>
          </Paper>
        </Box>
        <Box className="mt-16 min-w-200 ">
          <Paper
            elevation="5"
            className="py-4 px-5 text-center rounded-xl m-5 bg-gradient-to-b from-teal-50"
          >
            <Box
              width={100}
              height={100}
              className="relative mx-auto  bg-gradient-to-b
             from-yellow-200 rounded-full -mt-12 overflow-hidden shadow-md shadow-slate-400"
            >
              <img
                alt="img"
                className="object-cover fill"
                src="https://picsum.photos/100"
              />
            </Box>
            <h4 className="text-xl py-4">Respiratory</h4>
            <p className="max-w-md mx-auto">
              Objectively integrate enterprise-wide strategic theme areas with
              functionalized infrastructures.
            </p>
            <h2 className="pt-5 text-violet-600 font-medium">+ READMORE</h2>
          </Paper>
        </Box>
        <Box className="mt-16 min-w-200 sm:gap-y-40 ">
          <Paper
            elevation="5"
            className="py-4 px-5 text-center rounded-xl m-5 bg-gradient-to-b from-teal-50"
          >
            <Box
              width={100}
              height={100}
              className="relative mx-auto  bg-gradient-to-b
             from-yellow-200 rounded-full -mt-12 overflow-hidden shadow-md shadow-slate-400"
            >
              <img
                alt="img"
                className="object-cover fill"
                src="https://picsum.photos/100"
              />
            </Box>
            <h4 className="text-xl py-4">Digestion</h4>
            <p className="max-w-md mx-auto">
              Objectively integrate enterprise-wide strategic theme areas with
              functionalized infrastructures.
            </p>
            <h2 className="pt-5 text-violet-600 font-medium">+ READMORE</h2>
          </Paper>
        </Box>
        <Box className="mt-16 min-w-200 ">
          <Paper
            elevation="5"
            className="py-4 px-5 text-center rounded-xl m-5 bg-gradient-to-b from-teal-50"
          >
            <Box
              width={100}
              height={100}
              className="relative mx-auto  bg-gradient-to-b
             from-yellow-200 rounded-full -mt-12 overflow-hidden shadow-md shadow-slate-400"
            >
              <img
                alt="img"
                className="object-cover fill"
                src="https://picsum.photos/100"
              />
            </Box>
            <h4 className="text-xl py-4">Gyenic</h4>
            <p className="max-w-md mx-auto">
              Objectively integrate enterprise-wide strategic theme areas with
              functionalized infrastructures.
            </p>
            <h2 className="pt-5 text-violet-600 font-medium">+ READMORE</h2>
          </Paper>
        </Box>
        <Box className="mt-16 min-w-200 ">
          <Paper
            elevation="5"
            className="py-4 px-5 text-center rounded-xl m-5 bg-gradient-to-b from-teal-50"
          >
            <Box
              width={100}
              height={100}
              className="relative mx-auto  bg-gradient-to-b
             from-yellow-200 rounded-full -mt-12 overflow-hidden shadow-md shadow-slate-400"
            >
              <img
                alt="img"
                className="object-cover fill"
                src="https://picsum.photos/100"
              />
            </Box>
            <h4 className="text-xl py-4">Urinary</h4>
            <p className="max-w-md mx-auto">
              Objectively integrate enterprise-wide strategic theme areas with
              functionalized infrastructures.
            </p>
            <h2 className="pt-5 text-violet-600 font-medium">+ READMORE</h2>
          </Paper>
        </Box>
        <Box className="mt-16 min-w-200 ">
          <Paper
            elevation="5"
            className="py-4 px-5 text-center rounded-xl m-5 bg-gradient-to-b from-teal-50"
          >
            <Box
              width={100}
              height={100}
              className="relative mx-auto  bg-gradient-to-b
             from-yellow-200 rounded-full -mt-12 overflow-hidden shadow-md shadow-slate-400"
            >
              <img
                alt="img"
                className="object-cover fill"
                src="https://picsum.photos/100"
              />
            </Box>
            <h4 className="text-xl py-4">Pediatrics</h4>
            <p className="max-w-md mx-auto">
              Objectively integrate enterprise-wide strategic theme areas with
              functionalized infrastructures.
            </p>
            <h2 className="pt-5 text-violet-600 font-medium">+ READMORE</h2>
          </Paper>
        </Box>
        <Box className="mt-16 min-w-200 ">
          <Paper
            elevation="5"
            className="py-4 px-5 text-center rounded-xl m-5 bg-gradient-to-b from-teal-50"
          >
            <Box
              width={100}
              height={100}
              className="relative mx-auto  bg-gradient-to-b
             from-yellow-200 rounded-full -mt-12 overflow-hidden shadow-md shadow-slate-400"
            >
              <img
                alt="img"
                className="object-cover fill"
                src="https://picsum.photos/100"
              />
            </Box>
            <h4 className="text-xl py-4">Joints</h4>
            <p className="max-w-md mx-auto">
              Objectively integrate enterprise-wide strategic theme areas with
              functionalized infrastructures.
            </p>
            <h2 className="pt-5 text-violet-600 font-medium">+ READMORE</h2>
          </Paper>
        </Box>
        <Box className="mt-16 min-w-200 ">
          <Paper
            elevation="5"
            className="py-4 px-5 text-center rounded-xl m-5 bg-gradient-to-b from-teal-50"
          >
            <Box
              width={100}
              height={100}
              className="relative mx-auto  bg-gradient-to-b
             from-yellow-200 rounded-full -mt-12 overflow-hidden shadow-md shadow-slate-400"
            >
              <img
                alt="img"
                className="object-cover fill"
                src="https://picsum.photos/100"
              />
            </Box>
            <h4 className="text-xl py-4">Neural</h4>
            <p className="max-w-md mx-auto">
              Objectively integrate enterprise-wide strategic theme areas with
              functionalized infrastructures.
            </p>
            <h2 className="pt-5 text-violet-600 font-medium">+ READMORE</h2>
          </Paper>
        </Box>
        {/* <Box className="mt-16 min-w-200 ">
          <Paper
            elevation="5"
            className="py-4 px-5 text-center rounded-xl m-5 bg-gradient-to-b from-teal-50"
          >
            <Box
              width={100}
              height={100}
              className="relative mx-auto  bg-gradient-to-b
             from-yellow-200 rounded-full -mt-12 overflow-hidden shadow-md shadow-slate-400"
            >
              <img
                alt="img"
                className="object-cover fill"
                src="https://picsum.photos/100"
              />
            </Box>
            <h4 className="text-xl py-4">ENT</h4>
            <p className="max-w-md mx-auto">
              Objectively integrate enterprise-wide strategic theme areas with
              functionalized infrastructures.
            </p>
            <h2 className="pt-5 text-violet-600 font-medium">+ READMORE</h2>
          </Paper>
        </Box>
        <Box className="mt-16 min-w-200 ">
          <Paper
            elevation="5"
            className="py-4 px-5 text-center rounded-xl m-5 bg-gradient-to-b from-teal-50"
          >
            <Box
              width={100}
              height={100}
              className="relative mx-auto  bg-gradient-to-b
             from-yellow-200 rounded-full -mt-12 overflow-hidden shadow-md shadow-slate-400"
            >
              <img
                alt="img"
                className="object-cover fill"
                src="https://picsum.photos/100"
              />
            </Box>
            <h4 className="text-xl py-4">ENT</h4>
            <p className="max-w-md mx-auto">
              Objectively integrate enterprise-wide strategic theme areas with
              functionalized infrastructures.
            </p>
            <h2 className="pt-5 text-violet-600 font-medium">+ READMORE</h2>
          </Paper>
        </Box> */}
      </Container>
    </>
  );
}

export default Services;
