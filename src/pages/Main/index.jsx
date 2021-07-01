import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

import { Content, MaterialDrawer } from './styles';

const Main = () => (
  <React.Fragment>
    <MaterialDrawer variant='permanent'>
      Drawer
    </MaterialDrawer>
    <Content>
      <Suspense fallback='Carregando...'>
        <Switch>
          <Route>
            <h1>Main</h1>
          </Route>
        </Switch>
      </Suspense>
    </Content>
  </React.Fragment>
)

export default Main
