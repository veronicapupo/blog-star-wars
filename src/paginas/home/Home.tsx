import React, {useEffect} from 'react';
import {Typography, Grid, Button} from '@material-ui/core';
import './Home.css';
import { Box } from '@mui/material';
import TabPostagem from '../../components/postagens/tabpostagem/TabPostagem';
import ModalPostagem from '../../components/postagens/modalPostagem/ModalPostagem';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { TokenState } from '../../store/tokens/tokensReducer';
import { toast } from 'react-toastify';



function Home() {

    let navigate = useNavigate();
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
      );
        
    
        useEffect(() => {
            if (token == "") {
                toast.error('Você precisa estar logado',{
                    position: 'top-right',
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: false,
                    theme: "colored",
                    progress: undefined,
                });
                navigate("/login")
        
            }
        }, [token])
    
    return (
        <>
                <Grid  container direction="row" justifyContent="center" alignItems="center"  className='caixa'>
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} >
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" className='titulo'> <img
                src="https://imagensemoldes.com.br/wp-content/uploads/2020/06/Imagem-Obi-Wan-Star-Wars-PNG.png"
                alt=""
                width="700px"
                height="450px"
              /></Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className='titulo'> </Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                            <ModalPostagem />
                        </Box>
                        <Link to="/posts" className='text-decoration'>
                        <Button href='/posts'  variant="outlined" className='botaoHome'>Ver postagens</Button>
                        </Link>
                    </Box>
                </Grid>
                <Grid item xs={6} >
                    <img src="https://www.pocosja.com.br/divirta-se/wp-content/uploads/2015/12/star-wars.jpg" alt="" width="700px" height="500px"/>
                </Grid>
                <Grid xs={12} className='postagens'>
                    <TabPostagem />
                </Grid>
            </Grid>
            
        </>
    );
}


export default Home;