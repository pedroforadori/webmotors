import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from '../../store/actions';

import { Container, Procurar, Linha, ImagemCarro, Detalhes } from './styles';

const BotaoProcurar = ({ cars, searchCar }) => (
  <>
    <Procurar onClick={() => searchCar()}>VER OFERTAS</Procurar>
    <Container>
      {cars.data.map((veiculo) => (
        <Linha key={veiculo.ID}>
          <ImagemCarro src={veiculo.Image}></ImagemCarro>
          <Detalhes>
            <h1>
              {veiculo.Make} {veiculo.Model}
            </h1>
            <h2>R$ {veiculo.Price}</h2>
            <h2>KM {veiculo.KM}</h2>
            <p>
              {veiculo.YearFab}/{veiculo.YearModel}
            </p>
            <p>{veiculo.Color}</p>
          </Detalhes>
        </Linha>
      ))}
    </Container>
  </>
);

const mapStateToProps = (state) => ({
  cars: state.cars,
});

const mapDispatchToProps = (dispatch) => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(BotaoProcurar);
