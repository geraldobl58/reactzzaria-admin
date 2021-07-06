import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

import {
  Grid,
  Table,
  TableRow,
  TableCell,
  TableBody
} from '@material-ui/core';

import {
  Delete,
  Edit,
  Add
} from '@material-ui/icons';

import {
  MaterialTableContainer,
  TableTitle,
  THead,
  Th,
  MaterialButton,
  TitleContainer
} from './styles';

import { PIZZAS_SIZES, NEW } from 'routes';

import { useCollection } from 'hooks';

import singularOrPlural from 'utils/singularOrPlural';

function TablePizzasSizes() {
  const { data: pizzasSizes } = useCollection('sizes');
  const newSizePath = useRouteMatch(`${PIZZAS_SIZES}${NEW}`)

  return (
    <MaterialTableContainer>
      <TitleContainer>
        <Grid item>
          <TableTitle>
            Tamanhos cadastrados
          </TableTitle>
        </Grid>
        <Grid item>
          <MaterialButton
            color="primary"
            startIcon={<Add />}
            component={Link}
            to={`${PIZZAS_SIZES}${NEW}`}
            disabled={!!newSizePath}
          >
            Adicionar novo tamanho
          </MaterialButton>
        </Grid>
      </TitleContainer>

      <Table>
        <THead>
          <TableRow>
            <Th>Nome</Th>
            <Th>Diâmetro</Th>
            <Th>Fatias</Th>
            <Th>Sabores</Th>
            <Th/>
          </TableRow>
        </THead>
        <TableBody>
          {pizzasSizes?.map(pizza => (
            <TableRow key={pizza.id}>
              <TableCell>{pizza.name}</TableCell>
              <TableCell>{pizza.size}</TableCell>
              <TableCell>{pizza.slices}</TableCell>
              <TableCell>
                {pizza.flavours}{' '}
                {singularOrPlural(pizza.flavours, 'sabor', 'sabores')}
              </TableCell>
              <TableCell align='right'>
                <MaterialButton startIcon={<Edit />}>
                  Editar
                </MaterialButton>
                <MaterialButton color='secondary' startIcon={<Delete />}>
                  Remover
                </MaterialButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </MaterialTableContainer>
  )
}

export default TablePizzasSizes;
