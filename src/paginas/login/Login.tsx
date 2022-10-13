import React, {useState, useEffect, ChangeEvent} from 'react';
import { Grid, Typography, TextField, Button } from '@material-ui/core';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import { Box } from '@mui/material';
import UserLogin from '../../model/UserLogin';
import { login } from '../../service/Service';
import { useDispatch } from 'react-redux';
import { addToken } from '../../store/tokens/actions';
import { toast } from 'react-toastify';

function Login() {

    let navigate = useNavigate(); 
    const dispatch = useDispatch();
    const [token, setToken] = useState('');
    

    const [userLogin, setUserLogin] = useState<UserLogin>({
  
        id: 0,
        usuario: '',       
        senha: '',               
        token: ''

        
    })

    function updatedModel(e: ChangeEvent<HTMLInputElement>) {
        setUserLogin({
            ...userLogin,
            [e.target.name]: e.target.value
        })
    }

    useEffect(() => {
        if(token !== '') {
            dispatch(addToken(token));
          navigate('/home')
        }
      }, [token])
    
    

    async function onSubmit (e: ChangeEvent<HTMLFormElement>){
        e.preventDefault();

        try{
            await login(`/usuarios/logar`, userLogin, setToken)
            
            toast.success('Usuário logado com sucesso!',{
                position: 'top-right',
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            });
        } catch (error){
            toast.error('Dados inconsistentes, erro ao logar!',{
                position: 'top-right',
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            });

        }
    }


    return (
        <Grid container direction='row' justifyContent='center' alignItems='center'>
            <Grid alignItems='center' xs={6}>
                <Box paddingX={20}>
                    <form onSubmit={onSubmit}>
                        <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='textos1'>log in</Typography>
                        <TextField style={{fontFamily: 'Arial'}} value={userLogin.usuario} onChange={(e:ChangeEvent<HTMLInputElement>)=> updatedModel (e) } id='usuario' label='user' variant='outlined' name='usuario' margin='normal' fullWidth />
                        <TextField value={userLogin.senha} onChange={(e:ChangeEvent<HTMLInputElement>)=> updatedModel (e)} id='senha' label='password' variant='outlined' name='senha' margin='normal' type='password'fullWidth />
                        <Box marginTop={2} textAlign='center'>
                            
                                <Button className="botao" type='submit' variant='contained' color='primary'>
                                 Login
                                </Button>
                            
                        </Box>
                    </form>
                    <Box display='flex' justifyContent='center' marginTop={2}>
                        <Box marginRight={1}>
                            <Typography variant='subtitle1' gutterBottom align='center'>don't have an account?</Typography>
                        </Box>
                        <Link to='/cadastrousuario'>
                        <Typography variant='subtitle1' gutterBottom align='center'className='textos1'>sign up</Typography>                         
                        </Link>
                            
                    </Box>
                </Box>
            </Grid>
            <Grid xs={6} className='imagem' >

            </Grid>
        </Grid>
    );
}

export default Login;