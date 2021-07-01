import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

import {
  Typography,
  Divider,
  List,
  ListItem,
  ListItemText
} from '@material-ui/core';

import { DrawerContent, Content, MaterialDrawer } from './styles';

const Main = () => (
  <React.Fragment>
    <MaterialDrawer variant='permanent'>
      <DrawerContent>
        <Typography variant='h4'>
          Reactzzaria
        </Typography>
        <Typography>
          (Sistema Administrativo)
        </Typography>
      </DrawerContent>
      <Divider />
      <List>
        {menuItems.map(item => (
          <ListItem key={item.label} button>
          <ListItemText>{item.label}</ListItemText>
        </ListItem>
        ))}
      </List>
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

const menuItems = [
  {
    label: 'Pedidos'
  },
  {
    label: 'Tamanhos de Pizzas'
  },
  {
    label: 'Sabores de Pizzas'
  }
]

export default Main
