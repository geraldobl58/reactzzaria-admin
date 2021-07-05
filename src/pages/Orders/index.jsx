import React from 'react';

import {
  Table,
  TableRow,
  TableCell,
  TableBody,
  Typography,
} from '@material-ui/core';

import {
  MaterialTableContainer,
  TableTitle,
  THead,
  Th,
  Subtitle
} from './styles';

import { useOrders } from 'hooks';

import singularOrPlural from 'utils/singularOrPlural';

function Orders() {
  const { orders } = useOrders();
  console.log('ORDERS', orders);

  function getHour(date) {
    const options = {
      hour: 'numeric',
      minute: 'numeric'
    };

    return Intl.DateTimeFormat('pt-BR', options).format(date);
  }

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
            {orders?.map(order => {
              const {
                address,
                number,
                complement,
                district,
                code: zipcode,
                city,
                state
              } = order.address;
              return (
                <TableRow key={order.id}>
                  <TableCell>
                    <div>
                      <Subtitle>
                        Hórario do Pedido: {getHour(order.createdAt.toDate())}
                      </Subtitle>
                    </div>
                    <div>
                      <Subtitle>
                        Pedido:
                      </Subtitle>
                      <ul>
                        {order.pizzas.map((pizza, index) => (
                          <li key={index}>
                            <Typography>
                              {pizza.quantity}{' '}
                              {singularOrPlural(pizza.quantity, 'pizza', 'pizzas')} {' '}
                              {pizza.size.name.toUpperCase()} de {' '}
                              {pizza.flavours
                                .map(flavour => flavour.name)
                                .reduce((acc, flavour, index, array) => {
                                  if (index === 0) {
                                    return flavour;
                                  }

                                  if (index === array.length - 1) {
                                    return `${acc} e ${flavour}`
                                  }
                                  return `${acc}, ${flavour}`
                                }, '')
                              }
                            </Typography>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <Subtitle>
                        Endereço de Entrega:
                      </Subtitle>
                      <Typography>
                        {address}, {number && `nº ${number}`} { '' }
                        {complement && `, ${complement}`}<br />
                        Bairro: {district} - CEP: {zipcode}<br />
                        {city} / {state}
                      </Typography>
                    </div>
                  </TableCell>
                </TableRow>
              )
            })}
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
