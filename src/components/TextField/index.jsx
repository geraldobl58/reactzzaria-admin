import React from 'react';
import PropTypes from 'prop-types';

import { Grid } from '@material-ui/core';

import { MaterialTextField, } from './styles';

function TextField({ xs, autoFocus, ...props }) {
  return (
    <Grid item xs={xs}>
      <MaterialTextField
        fullWidth
        variant='outlined'
        inputProps={{
          autoFocus
        }}
        {...props}
      />
    </Grid>
  )
}

TextField.propTypes = {
  autoFocus: PropTypes.bool,
  xs: PropTypes.number
}
export default TextField;
