import React from 'react';
import { Grid } from '@material-ui/core';

import { useAuth } from 'hooks';

import { Container, Logo, GitHubButton } from './styles'

function Login() {
  const { login } = useAuth();

  return (
    <Container>
      <Grid container justify="center" spacing={4}>
        <Grid item>
          <Logo />
        </Grid>
        <Grid item xs={12} container justify="center">
          <GitHubButton onClick={login}>
            Entrar com Github
          </GitHubButton>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Login
