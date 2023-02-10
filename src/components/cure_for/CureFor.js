import { Box, Container, Paper, styled, Typography } from "@mui/material";
import React from "react";

// const Paperitem = styled(Paper)`
//   :hover {
//     box-shadow: 1px 1px 15px #0000006c;
//     animation: unset;
//     margin-top :1vh;
//     transform: perspective(1000px) rotateX(0deg) rotateY(0deg) rotateZ(0deg);
//   .menu
//     display: flex;
//     justify-content: space-around;
//     align-items :center;
//     max-width: 100%;
//     height; 100%;
//   }
//   width: 200px;
//   height: 300px;
//   margin-left: auto;
//   margin-right: auto;
//   margin-top: 20vh;
//   margin-bottom: 50px;
//   border-radius: 5px;
//   cursor: pointer;
//   box-shadow: 0 10px 20px 1px rgba(0, 0, 0, 0.1);
//   transform-origin: center center 0px;
//   transition: all 0.5s ease-out;
//   animation-name: animate;
//   animation-duration: 3s;
//   animation-iteration-count: infinite;
//   transform: perspective(1000px) rotateX(25deg) rotateY(4deg) rotateZ(-5deg);
//   z-index: 1;

// `;
const Paperitem = styled(Paper)`
  :hover {
    box-shadow: 6px 10px 15px #0000002c;
    // padding-top: 2px;
  }
  // :hover {
  //   box-shadow: 1px 1px 15px #0000006c;
  // }
  border-radius: 12px;
  text-align: center;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  // border: solid;
  // border-width: thin;
  // border-color: #0000001c;
  box-shadow: 1px 2px 6px #0000002c;
  // height: 50vh;
`;

Paperitem.defaultProps = { elevation: 0 };

var cureForlist = [
  {
    title: "Skin",
    description:
      "Whatever is the type of skin problem, it is always a cause of Depression, Ebrrasasment, and social Withdrawal.",
    icon: "https://cdn-icons-png.flaticon.com/512/1546/1546090.png",
  },
  {
    title: "Respiratory",
    description:
      "A collection of symptoms, mostly in the nose and eyes, which occur when you breath in something you are allergic to.",
    icon: "https://static.thenounproject.com/png/716606-200.png",
  },
  {
    title: "Digestion",
    description:
      "Take all that is given whether wealth, love or language, nothing comes by mistake and with good digestion all can be turned to health.",
    icon: "https://cdn3.iconfinder.com/data/icons/medical-specialties-1-2/256/Gastroenterology-512.png",
  },
  {
    title: "Gyenic",
    description:
      "Female contraception, infertility and problems in early pregnancy are within the province of gynaecology.",
    icon: "https://cdn0.iconfinder.com/data/icons/medical-big-set-mono/512/medical-health-uterus-gynecology-reproductive-ovaries-genitals-512.png",
  },
  {
    title: "Urinary",
    description:
      "A urinary tract infection, commonly known as UTI is one of the most common urinary problems and is an infection that occurs in the urinary tract.",
    icon: "https://static.thenounproject.com/png/65168-200.png",
  },
  {
    title: "Pediatrics",
    description:
      "It is concerned not only about immediate management of the ill child but also long term effects on quality of life, disability and survival.",
    icon: "https://cdn-icons-png.flaticon.com/512/6577/6577707.png",
  },
  {
    title: "Joints",
    description:
      "If pain is interfering with normal daily life activities, it is time to talk to a doctor about the problem and diagnose the cause of the pain quickly.",
    icon: "https://static.thenounproject.com/png/678003-200.png",
  },
  {
    title: "Neural",
    description:
      "Structural, biochemical or electrical abnormalities in the brain, spinal cord or other nerves can result in a range of symptoms.",
    icon: "https://cdn-icons-png.flaticon.com/512/2044/2044500.png",
  },
  {
    title: "Skin",
    description:
      "Whatever is the type of skin problem, it is always a cause of Depression, Ebrrasasment, and social Withdrawal.",
    icon: "https://picsum.photos/100",
  },
];

function CureFor() {
  return (
    <>
      <Box className="bg-slate-0">
        <Box className=" text-center pt-20 pb-8">
          <Typography variant="h1">We have cure for..</Typography>
        </Box>
        <Container className="p-4 grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 xs:grid-cols-1 gap-0 pb-20">
          <CureForCard
            title={cureForlist[0].title}
            description={cureForlist[0].description}
            icon={cureForlist[0].icon}
          />
          <CureForCard
            title={cureForlist[1].title}
            description={cureForlist[1].description}
            icon={cureForlist[1].icon}
          />
          <CureForCard
            title={cureForlist[2].title}
            description={cureForlist[2].description}
            icon={cureForlist[2].icon}
          />
          <CureForCard
            title={cureForlist[3].title}
            description={cureForlist[3].description}
            icon={cureForlist[3].icon}
          />
          <CureForCard
            title={cureForlist[4].title}
            description={cureForlist[4].description}
            icon={cureForlist[4].icon}
          />
          <CureForCard
            title={cureForlist[5].title}
            description={cureForlist[5].description}
            icon={cureForlist[5].icon}
          />
          <CureForCard
            title={cureForlist[6].title}
            description={cureForlist[6].description}
            icon={cureForlist[6].icon}
          />
          <CureForCard
            title={cureForlist[7].title}
            description={cureForlist[7].description}
            icon={cureForlist[7].icon}
          />
        </Container>
      </Box>
    </>
  );
}

export default CureFor;

function CureForCard({ title, description, icon }) {
  return (
    <>
      <Box id="services" className="mt-5">
        <Paperitem className="py-4 px-5 text-center rounded-xl m-5 bg-gradient-to-b from-teal-50 lg:h-64 md:h-52 sm:h-56">
          <Box
            width={100}
            height={100}
            className="relative mx-auto  bg-gradient-to-b
             from-pink-200 to-teal-50 rounded-full -mt-12 overflow-hidden shadow-none shadow-slate-400"
          >
            <img alt="img" className="object-cover fill p-6" src={icon} />
          </Box>
          <Typography variant="h4" className=" py-4 ">
            {title}
          </Typography>
          <Typography variant="subtitle2" className="max-w-md mx-auto ">
            {description}
          </Typography>
        </Paperitem>
      </Box>
    </>
  );
}
