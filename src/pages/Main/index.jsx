import React, { useEffect, useCallback, lazy, Suspense } from 'react';
import { Link, Switch, Route, useLocation } from 'react-router-dom';

import {
  Typography,
  Divider,
  List,
  ListItem,
  ListItemText,
  LinearProgress
} from '@material-ui/core';

import { DrawerContent, Content, MaterialDrawer } from './styles';

import * as routes from 'routes';

const Orders = lazy(() => import('pages/Orders'))
const PizzasSizes = lazy(() => import ('pages/PizzasSizes'));
const PizzasFlavours = lazy(() => import('pages/PizzasFlavours'));

const Main = () => {
  useScrollToTop();
  const { pathname } = useLocation();

  const getSelectedMenuItem = useCallback((item) => {
    return pathname === item.link ||
      (pathname.includes(item.link) && item.link !== routes.HOME);
  }, [pathname]);

  return (
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
            <ListItem
              key={item.label}
              button
              selected={getSelectedMenuItem(item)}
              component={Link}
              to={item.link}
            >
            <ListItemText>{item.label}</ListItemText>
          </ListItem>
          ))}
        </List>
      </MaterialDrawer>
      <Content>
        <Suspense fallback={<LinearProgress />}>
          <Switch>
            {menuItems.map(item => (
              <Route key={item.link} path={item.link} exact={item.exact}>
                <item.component />
              </Route>
            ))}
          </Switch>
        </Suspense>
      </Content>
    </React.Fragment>
  )
}

function useScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
}

const menuItems = [
  {
    label: 'Pedidos',
    link: routes.HOME,
    component: Orders,
    exact: true
  },
  {
    label: 'Tamanhos de Pizzas',
    link: routes.PIZZAS_SIZES,
    component: PizzasSizes
  },
  {
    label: 'Sabores de Pizzas',
    link: routes.PIZZAS_FLAVOURS,
    component: PizzasFlavours
  }
]

export default Main
