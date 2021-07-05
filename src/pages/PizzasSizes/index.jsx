import React from 'react';

import {
  Table,
  TableRow,
  TableCell,
  TableBody
} from '@material-ui/core';

import {
  MaterialTableContainer,
  TableTitle,
  THead,
  Th
} from './styles';

import { useCollection } from 'hooks';

import singularOrPlural from 'utils/singularOrPlural';

function PizzasSizes() {
  const pizzasSizes = useCollection('sizes');
  console.log(pizzasSizes);

  return (
    <MaterialTableContainer>
      <TableTitle>
        Tamanhos cadastrados
      </TableTitle>
      <Table>
        <THead>
          <TableRow>
            <Th>Nome</Th>
            <Th>Diâmetro</Th>
            <Th>Fatias</Th>
            <Th>Sabores</Th>
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
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </MaterialTableContainer>
  )
}

export default PizzasSizes;
