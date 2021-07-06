import React from 'react';

import TextField from 'components/TextField';

import {
  Button,
  Grid,
  Typography
} from '@material-ui/core';

import { Container } from './styles';

function FormRegisterSize() {
  return (
    <Container>
      <Grid item xs={12}>
        <Typography variant='h4'>
          Cadastrar novo tamanho
        </Typography>
      </Grid>

      <Grid item container component='form' spacing={2} xs={12}>
        <TextField
          label='Nome para esse tamanho. Ex: Pequena'
        />
        <TextField
          label='Diâmetro da pizza em cm'
        />
         <TextField
          label='Quantidade de fatias'
        />
         <TextField
          label='Quantide de sabores'
        />
        <Grid item container justify='flex-end' spacing={2}>
          <Grid item>
            <Button variant='contained'>
              Cancelar
            </Button>
          </Grid>
          <Grid item>
            <Button variant='contained' color='primary' type='submit'>
              Cadastrar
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  )
}

export default FormRegisterSize;
