import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import PropTypes from 'prop-types';

import {
  Grid,
  Table,
  TableRow,
  TableCell,
  TableBody,
  List,
  ListItem as MaterialListItem,
  ListItemText
} from '@material-ui/core';

import {
  Delete,
  Edit,
  Add
} from '@material-ui/icons';

import {
  MaterialTableContainer,
  TableTitle,
  THead,
  Th,
  MaterialButton,
  TitleContainer
} from './styles';

import { PIZZAS_FLAVOURS, NEW, EDIT } from 'routes';

function TablePizzasFlavours() {
  const newFlavourPath = useRouteMatch(`${PIZZAS_FLAVOURS}${NEW}`);

  return (
    <MaterialTableContainer>
      <TitleContainer>
        <Grid item>
          <TableTitle style={{ padding: 0 }}>
            Sabores cadastrados
          </TableTitle>
        </Grid>
        <Grid item>
          <MaterialButton
            color="primary"
            startIcon={<Add />}
            component={Link}
            to={`${PIZZAS_FLAVOURS}${NEW}`}
            disabled={!!newFlavourPath}
          >
            Adicionar novo sabor
          </MaterialButton>
        </Grid>
      </TitleContainer>

      <Table>
        <THead>
          <TableRow>
            <Th>Foto</Th>
            <Th>Nome</Th>
            <Th>Valores</Th>
            <Th/>
          </TableRow>
        </THead>
        <TableBody>
          <TableRow >
            <TableCell>
              <img
                src=""
                alt=""
                style={{
                  background: '#fc0',
                  display: 'block',
                  height: '50px',
                  width: '50px',
              }}
            />
            </TableCell>
            <TableCell>Sabor da pizza</TableCell>
            <TableCell>
              <List>
                <ListItem name='Broto' value={10} />
                <ListItem name='Pequena' value={20} />
                <ListItem name='Média' value={30} />
                <ListItem name='Grande' value={40} />
              </List>
            </TableCell>

            <TableCell align='right'>
              <MaterialButton
                startIcon={<Edit />}
                component={Link}
                to={`${PIZZAS_FLAVOURS}${EDIT(1)}`}
              >
                Editar
              </MaterialButton>
              <MaterialButton
                color='secondary'
                startIcon={<Delete />}
                onClick={() => {}}
              >
                Remover
              </MaterialButton>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </MaterialTableContainer>
  )
}

const ListItem = ({ name, value }) => (
  <MaterialListItem>
    <ListItemText>
      <strong>{name}</strong> R$ {value}
    </ListItemText>
  </MaterialListItem>
)

ListItem.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
}

export default TablePizzasFlavours;
