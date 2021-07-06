import React from 'react';
import { Route } from 'react-router-dom';

import TablePizzasSizes from './Table';
import FormRegisterSize from './Form';

import { PIZZAS_SIZES, NEW, EDIT } from 'routes';

const newSizePath = `${PIZZAS_SIZES}${NEW}`
const editSizePath = `${PIZZAS_SIZES}${EDIT()}`

function PizzasSizes() {
  return (
    <>
      <Route path={[newSizePath, editSizePath]}>
        <FormRegisterSize />
      </Route>
      <TablePizzasSizes />
    </>
  )
}

export default PizzasSizes;
