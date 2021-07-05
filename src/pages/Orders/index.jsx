import React, { useMemo } from 'react';

import {
  Fab,
  Table,
  TableRow,
  TableCell,
  TableBody,
  Typography,
} from '@material-ui/core';

import {
  Check,
  DonutLarge,
  Motorcycle
} from '@material-ui/icons';

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
  const { orders, status } = useOrders();
  console.log('ORDERS', orders);

  const allOrdersStatus = useMemo(() => {
    return [
      {
        title: 'Pedidos pendentes',
        type: status.pending,
        nextAction: status.inProgress,
        nextButtonTitle: 'Em Produção',
        icon: DonutLarge
      },
      {
        title: 'Pedidos em produção',
        type: status.inProgress,
        nextAction: status.outForDelivery,
        nextButtonTitle: 'Saiu para entrega',
        icon: Motorcycle
      },
      {
        title: 'Saiu para entrega',
        type: status.outForDelivery,
        nextAction: status.delivered,
        nextButtonTitle: 'Entregue',
        icon: Check
      },
      {
        title: 'Pedidos finalizados',
        type: status.delivered
      },
    ]
  }, [status]);

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
              {orderStatus.nextAction && (
                <Th>
                  <Typography align='center'>
                    Mudar Status
                  </Typography>
                </Th>
              )}
            </TableRow>
          </THead>
          <TableBody>
            {orders?.[orderStatus.type].length === 0 && (
              <TableRow>
                <TableCell>
                  <Typography>Nenhum pedido com este status.</Typography>
                </TableCell>
              </TableRow>
            )}
            {orders?.[orderStatus.type].map(order => {
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
                  <TableCell align='center'>
                    {orderStatus.nextAction && (
                      <Fab
                        color='primary'
                        title={`Mudar status para ${orderStatus.nextButtonTitle}`}
                        onClick={() => console.log('status', orderStatus.nextAction)}
                      >
                        <orderStatus.icon />
                      </Fab>
                    )}
                  </TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
    </MaterialTableContainer>
  ));
}

export default Orders;
