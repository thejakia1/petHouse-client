import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


const Footer = () => {
    return (
      <Box sx={{ flexGrow: 1, mb:0, mt: 0.5, backgroundColor:"#F4F5F3" }}>
         <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
         <Grid item xs={4} sm={8} md={4} sx={{display: 'flex', justifyContent: 'space-around'}}>
                  <Card sx={{ minWidth: 275 , boxShadow: 0, border: 0, backgroundColor:"#F4F5F3"}}>
                     <CardContent sx={{color:'#303179'}}>
                        <Typography sx={{textAlign: 'center', m:1, color:'#ef9273'}} style={{fontWeight:'bold'}} variant="h5" component="div">
                           PetHouse
                        </Typography>
                        <Typography style={{fontWeight:'bold'}} sx={{textAlign: 'center', m:1}} variant="body2" >
                           Home
                        </Typography>
                        <Typography style={{fontWeight:'bold'}} sx={{textAlign: 'center', m:1}} variant="body2" >
                           Explore Pets
                        </Typography>
                        <Typography style={{fontWeight:'bold'}} sx={{textAlign: 'center', m:1}} variant="body2" >
                           About
                        </Typography>
                        <Typography style={{fontWeight:'bold'}} sx={{textAlign: 'center', m:1}} variant="body2" >
                           Contact
                        </Typography>
                     </CardContent>
                  </Card>
            </Grid>
            <Grid item xs={4} sm={4} md={4} sx={{display: 'flex', justifyContent: 'space-around'}}>
                  <Card sx={{ minWidth: 275 , boxShadow: 0, border: 0, backgroundColor:"#F4F5F3"}}>
                     <CardContent sx={{color:'#303179'}}>
                        <Typography style={{fontWeight:'bold'}} sx={{textAlign: 'center', m:1}} variant="h5" component="div">
                           Useful Links
                        </Typography>
                        <Typography style={{fontWeight:'bold'}} sx={{textAlign: 'center', m:1}} variant="body2">
                           Post New AD
                        </Typography>
                        <Typography style={{fontWeight:'bold'}} sx={{textAlign: 'center', m:1}} variant="body2" >
                           Browse Store
                        </Typography>
                        <Typography style={{fontWeight:'bold'}} sx={{textAlign: 'center', m:1}} variant="body2" >
                           Pricing
                        </Typography>
                        <Typography style={{fontWeight:'bold'}} sx={{textAlign: 'center', m:1}} variant="body2" >
                           Submit Listing
                        </Typography>
                     </CardContent>
                  </Card>
            </Grid>
            <Grid item xs={4} sm={4} md={4} sx={{display: 'flex', justifyContent: 'space-around'}}>
                  <Card sx={{ minWidth: 275 , boxShadow: 0, border: 0, backgroundColor:"#F4F5F3"}}>
                     <CardContent sx={{color:'#303179'}}>
                        <Typography style={{fontWeight:'bold'}} sx={{textAlign: 'center', m:1}} variant="h5" component="div">
                        Our Address
                        </Typography>
                        <Typography style={{fontWeight:'bold'}} sx={{textAlign: 'center', m:1}} variant="body2" >
                           Block #H, Road -11
                        </Typography>
                        <Typography style={{fontWeight:'bold'}} sx={{textAlign: 'center', m:1}} variant="body2" >
                           Halishahar
                        </Typography>
                        <Typography style={{fontWeight:'bold'}} sx={{textAlign: 'center', m:1}} variant="body2" >
                           Chittagong, Bangladesh
                        </Typography>
                        <Typography style={{fontWeight:'bold'}} sx={{textAlign: 'center', m:1}} variant="body2" >
                           Call Now  +21524145
                        </Typography>
                     </CardContent>
                  </Card>
            </Grid>
         </Grid>
         <Typography sx={{textAlign: 'center', mt:1, mb:0, pb: 1, color:"#303179", fw:'bold'}} variant="body2" >
         © Copyright 2021, PetHouse | All Rights Reserved by Jakia
         </Typography>
      </Box>
    );
};

export default Footer;