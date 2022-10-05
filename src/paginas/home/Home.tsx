import React from 'react';
import {Typography, Grid, Button} from '@material-ui/core';
import './Home.css';
import { Box } from '@mui/material';
import TabPostagem from '../../components/postagens/tabpostagem/TabPostagem';


function Home() {
    return (
        <>
                <Grid  container direction="row" justifyContent="center" alignItems="center"  className='caixa'>
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} >
                        <Typography  variant="h3" gutterBottom color="textPrimary" component="h3" align="center" className='titulo'>Welcome</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className='titulo'> to the dark side!</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                        </Box>
                        <Button variant="outlined" className='botao'>Ver Postagens</Button>
                    </Box>
                </Grid>
                <Grid item xs={6} >
                    <img src="https://www.pocosja.com.br/divirta-se/wp-content/uploads/2015/12/star-wars.jpg" alt="" width="700px" height="500px" />
                </Grid>
                <Grid xs={12} className='postagens'>
                    <TabPostagem />
                </Grid>
            </Grid>
            
        </>
    );
}

export default Home;