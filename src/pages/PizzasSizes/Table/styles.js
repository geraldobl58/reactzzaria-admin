import styled from 'styled-components';

import {
  Button,
  Grid,
  TableContainer,
  TableHead,
  TableCell,
  Typography,
  Paper
} from '@material-ui/core';

export const MaterialButton = styled(Button).attrs({
  variant: 'contained'
})`
   && {
     margin-left: ${({ theme }) => theme.spacing(2)}px;
   }
`;

export const TitleContainer = styled(Grid).attrs({
  container: true,
  justify: 'space-between',
  alignItems: 'center'
})`
   && {
     padding: ${({ theme }) => theme.spacing(3)}px;
   }
`;

export const THead = styled(TableHead)`
   && {
     background: ${({ theme }) => theme.palette.common.black};
   }
`;

export const Th = styled(TableCell)`
  && {
     color: ${({ theme }) => theme.palette.common.white};
   }
`;

export const TableTitle = styled(Typography).attrs({
  variant: 'h6'
})`
  && {
    padding: ${({ theme }) => theme.spacing(3)}px;
  }
`;

export const MaterialTableContainer = styled(TableContainer).attrs({
  component: Paper
})`
  && {
    margin-bottom: ${({ theme }) => theme.spacing(3)}px;
  }
`

export const Subtitle = styled(Typography).attrs({
  variant: 'button'
})`
  && {
    font-weight: bold;
  }
`
