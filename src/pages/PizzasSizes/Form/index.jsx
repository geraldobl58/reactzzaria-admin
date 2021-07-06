import React, { useState, useEffect, useCallback, useReducer } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';

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
  const [pizzaEditable, dispatch] = useReducer(reducer, initialState);
  console.log(pizzaEditable)

  const { id } = useParams();

  const { pizza, add } = usePizzaSize(id);

  const history = useHistory();

  useEffect(() => {
    dispatch({
      type: 'EDIT',
      payload: pizza
    });
  }, [pizza]);

  const handleChange = useCallback((e) => {

  }, []);

  const handleSubmit = useCallback(async(e) => {
    e.preventDefault();

    const { name, size, slices, flavours } = e.target.elements;

    const normalizedData = {
      name: name.value,
      size: Number(size.value),
      slices: Number(slices.value),
      flavours: Number(flavours.value)
    };

    await add(normalizedData);

    history.push(PIZZAS_SIZES);

  }, [add, history]);

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
          value={pizzaEditable.name}
          onChange={handleChange}
        />
        <TextField
          label='Diâmetro da pizza em cm'
          name='size'
          value={pizzaEditable.size}
          onChange={handleChange}
        />
         <TextField
          label='Quantidade de fatias'
          name='slices'
          value={pizzaEditable.slices}
          onChange={handleChange}
        />
         <TextField
          label='Quantide de sabores'
          name='flavours'
          value={pizzaEditable.flavours}
          onChange={handleChange}
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

const initialState = {
  name: '',
  size: '',
  slices: '',
  flavours: ''
}

function reducer(state, action) {
  if (action.type === 'EDIT') {
    return action.payload;
  }

  return  state;
}

function usePizzaSize(id) {
  const { data, add } = useCollection('sizes');
  const [pizza, setPizza] = useState(initialState);

  useEffect(() => {
    setPizza(data?.find(p => p.id === id) || initialState);
  }, [data, id]);

  return { pizza, add };
}

export default FormRegisterSize;
