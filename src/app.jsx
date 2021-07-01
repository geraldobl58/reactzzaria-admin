import React, { lazy, Suspense, useState, useEffect } from 'react';
import { Redirect, Route, Switch, useLocation } from 'react-router-dom';

import { HOME, LOGIN } from 'routes';

import { LinearProgress } from '@material-ui/core';

import firebase from 'services/firebase';

import { useAuth } from 'hooks';

const MainPage = lazy(() => import('pages/Main'))
const Login = lazy(() => import('pages/Login'))

function App() {
  const [didCheckUserIn, setDidCheckUserIn]  = useState(false);
  const { userInfo, setUserInfo, logout } = useAuth();
  const location = useLocation();

  const { isUserLoggedIn } = userInfo;

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setUserInfo({
        isUserLoggedIn: !!user,
        user: user && {
          ...user,
          firstName: user.displayName.split(' ')[0]
        }
      });
      setDidCheckUserIn(true);
    });
  }, [setUserInfo, logout]);

  if (!didCheckUserIn) {
    return <LinearProgress />
  }

  if (isUserLoggedIn && location.pathname === LOGIN) {
    return <Redirect to={HOME} />
  }

  if (!isUserLoggedIn && location.pathname !== LOGIN) {
    return <Redirect to={LOGIN} />
  }

  return (
    <Suspense fallback={<LinearProgress />}>
      <Switch>
        <Route path={LOGIN} component={Login} />
        <Route component={MainPage} />
      </Switch>
    </Suspense>
  )
}

export default App;
