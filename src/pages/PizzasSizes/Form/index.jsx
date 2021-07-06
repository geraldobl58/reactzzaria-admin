import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';

import TextField from 'components/TextField';

import { PIZZAS_SIZES } from 'routes';

import { useCollection } from 'hooks';

import {
  Button,
  Grid,
  Typography
} from '@material-ui/core';

import { Container } from './styles';

function FormRegisterSize() {
  const { add } = useCollection('sizes');

  const handleSubmit = useCallback((e) => {
    e.preventDefault();

    const { name, size, slices, flavours } = e.target.elements;

    const normalizedData = {
      name: name.value,
      size: Number(size.value),
      slices: Number(slices.value),
      flavours: Number(flavours.value)
    };

    add(normalizedData);

  }, [add]);

  return (
    <Container>
      <Grid item xs={12}>
        <Typography variant='h4'>
          Cadastrar novo tamanho
        </Typography>
      </Grid>

      <Grid
        item
        container
        component='form'
        spacing={2}
        xs={12}
        onSubmit={handleSubmit}
      >
        <TextField
          label='Nome para esse tamanho. Ex: Pequena'
          name='name'
        />
        <TextField
          label='Diâmetro da pizza em cm'
          name='size'
        />
         <TextField
          label='Quantidade de fatias'
          name='slices'
        />
         <TextField
          label='Quantide de sabores'
          name='flavours'
        />
        <Grid item container justify='flex-end' spacing={2}>
          <Grid item>
            <Button variant='contained' component={Link} to={PIZZAS_SIZES}>
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
