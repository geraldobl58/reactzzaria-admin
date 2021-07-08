import React, {
  useState,
  useEffect,
  useCallback,
  useReducer,
  useMemo,
  useRef
} from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';

import TextField from 'components/TextField';

import { PIZZAS_FLAVOURS } from 'routes';

import { useCollection } from 'hooks';

import {
  Button,
  Grid,
  Typography
} from '@material-ui/core';

import { Container } from './styles';

function FormRegisterFlavour() {

  // const [pizzaEditable, dispatch] = useReducer(reducer, initialState);

  const { id } = useParams();

  // const { pizza, add, edit } = usePizzaSize(id);

  // const history = useHistory();

  const nameField = useRef();

  const texts = useMemo(() => ({
    title: id ? 'Editar tamanho' : 'Cadastrar novo sabor',
    button: id ? 'Salvar' : 'Cadastrar'
  }), [id]);

  useEffect(() => {
    nameField.current.focus();
  }, [id]);

  return (
    <Container>
      <Grid item xs={12}>
        <Typography variant='h4'>
          {texts.title}
        </Typography>
      </Grid>

      <Grid
        item
        container
        component='form'
        spacing={2}
        xs={12}
      >
        <TextField
          label='Nome do sabor'
          name='name'
          // value={pizzaEditable.name}
          // onChange={handleChange}
          inputRef={nameField}
        />
        <Grid item container justify='flex-end' spacing={2}>
          <Grid item>
            <Button variant='contained' component={Link} to={PIZZAS_FLAVOURS}>
              Cancelar
            </Button>
          </Grid>
          <Grid item>
            <Button variant='contained' color='primary' type='submit'>
              {texts.button}
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  )
}

export default FormRegisterFlavour;
