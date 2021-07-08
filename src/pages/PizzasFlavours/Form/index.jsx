import React, {
  useState,
  useEffect,
  useMemo,
  useCallback,
  useReducer,
  useRef
} from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';

import TextField from 'components/TextField';

import { PIZZAS_FLAVOURS } from 'routes';

import {
  Button,
  Grid,
  Typography,
  InputLabel,
} from '@material-ui/core';

import { Container } from './styles';

import { useCollection } from 'hooks';

function FormRegisterFlavour() {
  const { id } = useParams();

  const nameField = useRef();

  const history = useHistory();

  const { data: pizzasSizes } = useCollection('sizes');
  const { pizza, add } = usePizzaFlavour(id);
  const [pizzaEditable, dispatch] = useReducer(reducer, initialState);

  const texts = useMemo(() => ({
    title: id ? 'Editar tamanho' : 'Cadastrar novo sabor',
    button: id ? 'Salvar' : 'Cadastrar'
  }), [id]);

  useEffect(() => {
    nameField.current.focus();
  }, [id]);

  useEffect(() => {
    dispatch({
      type: 'EDIT',
      payload: pizza
    })
  }, [pizza]);

  const handleChange = useCallback(async(e) => {

  }, []);

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    const fields = e.target.elements;

    const normalizedData = {
      name: fields.name.value,
      image: fields.image.value,
      value: pizzasSizes.reduce((acc, size) => {
        acc[size.id] = Number(fields[`size-${size.id}`].value);
        return acc;
      }, {})
    }

    await add(normalizedData);
    history.push(PIZZAS_FLAVOURS);
  }, [pizzasSizes, add, history]);

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
        onSubmit={handleSubmit}
      >
        <TextField
          label='Nome do sabor'
          name='name'
          value={pizzaEditable.name}
          onChange={handleChange}
          inputRef={nameField}
        />
         <TextField
          label='Link para imagem desse sabor'
          name='image'
          value={pizzaEditable.image}
          onChange={handleChange}
        />

        <Grid item xs={12}>
          <InputLabel>Valores (em R$) para cada tamanho</InputLabel>
        </Grid>

        {pizzasSizes?.map(size => (
          <TextField
            key={size.id}
            label={size.name}
            name={`size-${size.id}`}
            xs={3}
          />
        ))}

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

const initialState = {
  name: '',
  image: '',
  value: {}
};

function reducer(state, action) {
  if (action.type === 'EDIT') {
    return action.payload
  }

  return state;
}

function usePizzaFlavour(id) {
  const { data, add, edit } = useCollection('flavours');
  const [pizza, setPizza] = useState(initialState);

  useEffect(() => {
    setPizza(data?.find(p => p.id === id) || initialState);
  }, [data, id]);

  return { pizza, add, edit };
}

export default FormRegisterFlavour;
