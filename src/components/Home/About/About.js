import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button, Typography } from '@mui/material';

const aboutBanner = {
    backgroundBlendMode: 'darken, luminosity',
    marginTop: 150,
    marginBottom: 20,
}


const About = () => {
    return (
        <Box style={aboutBanner} sx={{ flexGrow: 1, mt: 5, mb: 2 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <img
                        style={{ width: 400, marginTop: 75 }}
                        src="https://img.freepik.com/free-photo/home-garden-arrangement-with-copy-space_23-2148851374.jpg?size=626&ext=jpg" alt="" />
                </Grid>
                <Grid item xs={12} md={6} sx={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    textAlign: 'left'
                }}>
                    <Box>
                        <Typography variant="h6" sx={{ mb: 4 }} >
                            <span style={{ color: "#ed7966" }}>//</span> About Us <span style={{ color: "#ed7966" }}>//</span>
                        </Typography>
                        <Typography variant="h3">
                            Best Agency For <br /> Buying Pets
                        </Typography>
                        <Typography variant="body1" sx={{ my: 3, mr: 5 }} style={{ padding: '0 50 0 0', fontWeight: '300' }}>
                            There are so many challenges when You need to find someone both you and your pet trust. You need them to be available on the right days at the right times, and maybe even last minute. And of course, you want the best pet out there for you. At PetHouse, these are the problems we solve for.
                        </Typography>
                        <Button variant="contained" sx={{ mx: 'auto', color: "#ef9273", backgroundColor: "#303179" }} style={{  fontWeight: 'bold', marginBottom: 30 }}>Learn More</Button>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default About;