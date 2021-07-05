import styled from 'styled-components';

import { Grid } from '@material-ui/core';

export const Container = styled(Grid).attrs({
  container: true,
  spacing: 2
})`
  && {
    margin-bottom: ${({ theme }) => theme.spacing(5)}px;
  }
`;
