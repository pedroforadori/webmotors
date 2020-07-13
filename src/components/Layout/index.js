import React, { Component } from 'react';

import Logo from '../../assets/webmotors.svg';
import BotaoProcurar from '../../components/BotaoProcurar';
import FiltroPesquisa from '../../components/FiltroPesquisa';
import Espacamento from '../../components/Espacamento';

import { Container, Wrapper, Header, Tab, BuscaAvancada, WebHeader } from './styles';

class Layout extends Component {
  state = {
    display: 'none',
  };

  handleClick = () => {
    if (this.state.display == 'none') {
      this.setState({
        display: '',
      });
    } else {
      this.setState({
        display: 'none',
      });
    }
  };

  render() {
    return (
      <Container>
        <Wrapper>
          <WebHeader>
            <img src={Logo} />
            <Header>
              <Tab>
                <li>
                  <a>
                    Comprar <strong>Carros</strong>
                  </a>
                </li>
                <li>
                  <a>
                    Comprar <strong>Motos</strong>
                  </a>
                </li>
                <li>
                  <button>Quero Vender</button>
                </li>
              </Tab>
            </Header>
            <Espacamento />
            <BuscaAvancada>
              <a onClick={this.handleClick}>Busca Avançada</a>
            </BuscaAvancada>
            <Espacamento />
          </WebHeader>
          <FiltroPesquisa display={this.state.display} />

          <BotaoProcurar />
        </Wrapper>
      </Container>
    );
  }
}

export default Layout;
