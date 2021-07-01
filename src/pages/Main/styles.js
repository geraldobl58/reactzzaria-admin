import styled from 'styled-components';

import { Drawer } from '@material-ui/core';

export const Content = styled.main`
  margin-left: ${({ theme }) => theme.extend.drawerWith}px;
  padding: ${({ theme }) => theme.spacing(2)}px;
`;

export const MaterialDrawer = styled(Drawer)`
  && {
    .MuiPaper-root {
      width: ${({ theme }) => theme.extend.drawerWith}px;
    }
  }
`
