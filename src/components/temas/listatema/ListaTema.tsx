import React, {useState, useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import './ListaTema.css';
import Tema from '../../../model/Tema';
import { Box } from '@mui/material';
import useLocalStorage from 'react-use-localstorage';
import {busca} from '../../../service/Service';
import { toast } from 'react-toastify';

function ListaTema() {

  const[temas, setTemas] = useState<Tema[]>([])
  const[token, setToken] = useLocalStorage('token');

  let navigate = useNavigate();

  useEffect(()=>{
    if(token == ''){
      toast.error('Você precisa estar logado!',{
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

  async function getTema(){
    await busca("/temas", setTemas, {
      headers: {
        'Authorization': token
      }
    })
  }

  useEffect(()=>{
    getTema()
  }, [temas.length])

  return (
    <>
    {
      temas.map(tema =>(
      <Box m={2} key ={tema.id} >
        <Card variant="outlined">
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Theme
            </Typography>
            <Typography variant="h5" component="h2">
              {tema.descricao}
            </Typography>
          </CardContent>
          <CardActions>
            <Box display="flex" justifyContent="center" mb={1.5} >

              <Link to={`/formularioTema/${tema.id}`} className="text-decorator-none">
                <Box mx={1}>
                  <Button variant="contained"  className='btnAtualizar' size='small' >
                  update
                  </Button>
                </Box>
              </Link>
              <Link to={`/deletarTema/${tema.id}`} className="text-decorator-none">
                <Box mx={1}>
                  <Button variant="contained" size='small' className='btnDeletar'>
                    delete
                  </Button>
                </Box>
              </Link>
            </Box>
          </CardActions>
        </Card>
      </Box>
))}
    </>
  );
}


export default ListaTema;