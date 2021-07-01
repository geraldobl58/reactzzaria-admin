import styled from 'styled-components';

import {
  TableContainer,
  TableHead,
  TableCell,
  Typography,
  Paper
} from '@material-ui/core';

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
