import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Show from './ExploreProducts';
import useProducts from '../../hooks/useProducts';
import Navigation from '../Shared/Navigation/Navigation';
import Footer from '../Shared/Footer/Footer';

const Explore = () => {
    const [products] = useProducts([]);

    return (
        <div>
            <Navigation></Navigation>
            <Container sx={{ mt: 5, mb: 8 }} >
                <Typography sx={{ fontWeight: 700, textAlign: 'center', mb: 2, mt: 2, color: "#303179" }} variant="h4" component="div">
                    Explore Our Pets
                </Typography>
                <Grid container spacing={{ xs: 2, md: 4 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        products.map(product => <Show key={product._id} product={product}></Show>)
                    }
                </Grid>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Explore;