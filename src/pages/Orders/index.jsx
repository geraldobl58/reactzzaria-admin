import React from 'react';

import {
  Table,
  TableRow,
  TableCell,
  TableBody,
  Typography,
} from '@material-ui/core';

import { MaterialTableContainer, TableTitle, THead, Th, Subtitle } from './styles';

function Orders() {
  return allOrdersStatus.map(orderStatus => (
    <MaterialTableContainer key={orderStatus.title}>
        <TableTitle>
          {orderStatus.title}
        </TableTitle>
        <Table>
          <THead>
            <TableRow>
              <Th>
                <Typography>
                  Informações do Pedido
                </Typography>
              </Th>
            </TableRow>
          </THead>
          <TableBody>
            <TableRow>
              <TableCell>
                <div>
                  <Subtitle>
                    Hórario do Pedido: 10:20h
                  </Subtitle>
                </div>
                <div>
                  <Subtitle>
                    Pedido:
                  </Subtitle>
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
                  <Subtitle>
                    Endereço de Entrega:
                  </Subtitle>
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
    </MaterialTableContainer>
  ));
}

const allOrdersStatus = [
  {
    title: 'Pedidos pendentes'
  },
  {
    title: 'Pedidos em produção'
  },
  {
    title: 'Saiu para entrega'
  },
  {
    title: 'Pedidos finalizados'
  },
]

export default Orders;
