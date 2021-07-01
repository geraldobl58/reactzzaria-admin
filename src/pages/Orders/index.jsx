import React from 'react';

import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TableContainer,
  Typography,
  Paper
} from '@material-ui/core';

function Orders() {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              <Typography>
                Informações do Pedido
              </Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>
              <div>
                <Typography variant='button'>
                  Hórario do Pedido: 10:20h
                </Typography>
              </div>
              <div>
                <Typography variant='button'>
                  Pedido:
                </Typography>
                <ul>
                  <li>
                    <Typography>
                      1 pizza MÉDIA de {' '}
                      Frango com Catupiry e Calebresa
                    </Typography>
                  </li>
                </ul>
              </div>
              <div>
                <Typography variant='button'>
                  Endereço de Entrega:
                </Typography>
                <Typography>
                  Rua: Fulano, n18, { '' }
                  Apt: 120<br />
                  Bairro: São Pedro - CEP: 06954-041<br />
                  Rio de Janeiro/RJ
                </Typography>
              </div>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default Orders;
