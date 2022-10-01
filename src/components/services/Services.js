import styled from '@emotion/styled'
import { Container, Grid, Paper } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const Paperitem = styled(Paper)
    `
color: #000;
:hover {
  color: #4caf50;
}
text-align: center;
height:40vh;
margin-top:0.5rem;
margin-bottom:0.5rem;
padding-top:1rem;
padding-bottom:1rem;
`;

function Services() {
    return (
        <Box sx={{ backgroundColor: '#599c2a', margin: '5%', paddingBottom: '1rem', paddingLeft: '1rem', paddingRight: '1rem', height:'100%' }}>
            <Grid container spacing={2} sx={{ justifyContent: 'center' }}>
                <Grid item xs={10} sm={6} md={3}>
                    <Paperitem>
                        xs=8
                    </Paperitem>
                </Grid>
                <Grid item xs={10} sm={6} md={3}>
                    <Paperitem>
                        xs=4
                    </Paperitem>
                </Grid>
                <Grid item xs={10} sm={6} md={3}>
                    <Paperitem>
                        xs=4
                    </Paperitem>
                </Grid>
                <Grid item xs={10} sm={6} md={3}>
                    <Paperitem>
                        xs=8
                    </Paperitem>
                </Grid>
            </Grid>

        </Box>
    )
}

export default Services


