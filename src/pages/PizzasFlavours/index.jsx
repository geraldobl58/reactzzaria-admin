import React from 'react';
import { Route } from 'react-router-dom';

import TablePizzasFlavours from './Table';
import FormRegisterFlavour from './Form';

import { PIZZAS_FLAVOURS, NEW, EDIT } from 'routes';

const newFlavourPath = `${PIZZAS_FLAVOURS}${NEW}`
const editFlavourPath = `${PIZZAS_FLAVOURS}${EDIT()}`

function PizzasFlavours() {
  return (
    <>
      <Route path={[newFlavourPath, editFlavourPath]}>
        <FormRegisterFlavour />
      </Route>
      <TablePizzasFlavours />
    </>
  )
}

export default PizzasFlavours;
