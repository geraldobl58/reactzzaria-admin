import React from 'react';
import { Route } from 'react-router-dom';

import TablePizzasSizes from './Table';
import FormRegisterSize from './Form';

import { PIZZAS_SIZES, NEW } from 'routes';

function PizzasSizes() {
  return (
    <>
      <Route path={`${PIZZAS_SIZES}${NEW}`}>
        <FormRegisterSize />
      </Route>
      <TablePizzasSizes />
    </>
  )
}

export default PizzasSizes;
