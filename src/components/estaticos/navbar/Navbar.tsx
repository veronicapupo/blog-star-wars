import React from 'react';
import { AppBar, Toolbar, Typography} from '@material-ui/core';
import { Box } from '@mui/material';
import './Navbar.css'
import {Link, useNavigate} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { addToken } from '../../../store/tokens/actions';
import {toast} from 'react-toastify';

function Navbar() {
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
      );
    let navigate = useNavigate();
    const dispatch = useDispatch();

    function goLogout() {
        dispatch(addToken(''));
        toast.info('usuário deslogado',{
            position: 'top-right',
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme: "colored",
            progress: undefined,
        });
        navigate('/login')
    }

    var navbarComponent;

    if(token != ""){
        navbarComponent = <AppBar position="static" className="header-container">
        <Toolbar variant="dense">
        <Box className='cursor' >
            <Typography variant="h5" color="inherit" >
                @
            </Typography>
        </Box>

        <Box display="flex" justifyContent="start">
            <Link to="/home" className='text-decorator-none'>
            <Box mx={1} className='cursor'>
                <Typography variant="h6" color="inherit">
                    home
                </Typography>
            </Box>
            </Link>
            <Link to="/posts" className='text-decorator-none'>
            <Box mx={1} className='cursor'>
                <Typography variant="h6" color="inherit">
                    postagens
                </Typography>
            </Box>
            </Link>
            <Link to="/temas" className='text-decorator-none'>
            <Box mx={1} className='cursor'>
                <Typography variant="h6" color="inherit">
                    temas
                </Typography>
            </Box>
            </Link>
            <Link to="/formularioTema" className='text-decorator-none'>
            <Box mx={1} className='cursor'>
                <Typography variant="h6" color="inherit">
                    cadastrar-tema
                </Typography>
            </Box>
            </Link>
            <Link to='/login' className='text-decorator-none'>
            <Box mx={1} className='cursor' onClick={goLogout}>
                <Typography variant="h6" color="inherit">
                    logout
                </Typography>
            </Box>
            </Link>
            </Box>                  

    </Toolbar>
</AppBar>

    }
    return (
        <>        
           {navbarComponent} 
        </>
    )
}

export default Navbar;