import { Container, Grid, Paper, styled } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Paperitem = styled(Paper)`
  :hover {
    box-shadow: 1px 1px 15px #0000006c;
  }
  border-radius:12px;
  text-align: center;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  height:50vh;
`;
Paperitem.defaultProps={elevation:8};

function Services() {
  return (
    <>
    <Container className="text-center">
           <p className="mt-20 text-xl text-slate-500 font-medium "> Services </p>
           <h5 className="font-semibold text-3xl font-sans">Services we provide</h5>
    </Container>
    <Box
      sx={{
        marginTop: "5%",
        marginBottom: "5%",
        paddingBottom: "3%",
        paddingX:'10%',
      }}
    >
      <Grid container spacing={5} sx={{ justifyContent: "center" }}>
        <Grid item xs={10} sm={6} md={3}>
          <Paperitem >xs=8</Paperitem>
        </Grid>
        <Grid item xs={10} sm={6} md={3}>
          <Paperitem>xs=4</Paperitem>
        </Grid>
        <Grid item xs={10} sm={6} md={3}>
          <Paperitem>xs=4</Paperitem>
        </Grid>
        <Grid item xs={10} sm={6} md={3}>
          <Paperitem>xs=8</Paperitem>
        </Grid>
      </Grid>
    </Box>
    </>
  );
}

export default Services;
