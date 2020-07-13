import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from '../../store/actions';

import { Formulario, Selects } from './styles';

class FiltroPesquisa extends Component {
  constructor(props) {
    super(props);

    console.log(this.props.display);

    props.getMake();
    props.getModel(1);
    props.getVersion(1);
    props.getEstado();
  }

  render() {
    return (
      <Formulario display={this.props.display}>
        <input type="checkbox" /> Novos
        <input type="checkbox" /> Usados
        <Selects>
          <select onChange={({ target }) => this.props.getModel(target.value)}>
            <option value="0">Todas Marcas</option>
            {this.props.make.data.map((m) => (
              <option key={m.ID} value={m.ID}>
                {m.Name}
              </option>
            ))}
          </select>
          <select
            onChange={({ target }) => this.props.getVersion(target.value)}
          >
            <option value="0">Todos Modelos</option>
            {this.props.model.data.map((mo) => (
              <option key={mo.ID} value={mo.ID}>
                {mo.Name}
              </option>
            ))}
          </select>
        </Selects>
        <Selects>
          <select>
            <option value="0">Todas Versões</option>
            {this.props.version.data.map((v) => (
              <option key={v.ID} value={v.ID}>
                {v.Name}
              </option>
            ))}
          </select>
          <select onChange={({ target }) => this.props.getCidade(target.value)}>
            <option value="0">Todos Estados</option>
            {this.props.estado.data.map((e) => (
              <option key={e.ID} value={e.ID}>
                {e.nome}
              </option>
            ))}
          </select>
          <select>
            <option value="0">Todas Cidades</option>
            {this.props.cidade.data.map((c) => (
              <option key={c.ID} value={c.ID}>
                {c.nome}
              </option>
            ))}
          </select>
        </Selects>
      </Formulario>
    );
  }
}

const mapStateToProps = (state) => ({
  make: state.make,
  model: state.model,
  version: state.version,
  estado: state.estado,
  cidade: state.cidade,
});

const mapDispatchToProps = (dispatch) => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(FiltroPesquisa);
