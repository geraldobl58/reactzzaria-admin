import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

const Main = () => (
  <React.Fragment>
    <Suspense fallback='Carregando...'>
      <Switch>
        <Route>
          <h1>Main</h1>
        </Route>
      </Switch>
    </Suspense>
  </React.Fragment>
)

export default Main
