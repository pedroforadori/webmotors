import styled from 'styled-components';

export const Container = styled.ul`
  @media (max-width: 375px) {
    display: flex;
    flex-direction: column;
    width: 90%;
  }
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Procurar = styled.button`
  color: #fff;
  background: var(--primary);
  height: 40px;
  @media (max-width: 375px) {
    width: 90%;
  }
  color: #fff;
  width: 30%;
  height: 40px;
  float: right;
  margin-top: 10px;
`;

export const Linha = styled.li`
  display: flex;
  align-items: center;
  /* border: 1px solid #000; */
  min-height: 200px;
  margin-top: 10px;
  -webkit-box-shadow: 1px 1px 1px 1px rgba(50, 50, 50, 0.77);
  -moz-box-shadow: 1px 1px 1px 1px rgba(50, 50, 50, 0.77);
  box-shadow: 1px 1px 1px 1px rgba(50, 50, 50, 0.77);
  img {
    align-items: center;
    margin-left: 2px;
  }

`;

export const ImagemCarro = styled.img`
  @media (max-width: 375px) {
    width: 50%;
    height: 120px;
  }
  width: 30%;
`;

export const Detalhes = styled.div`
  @media (max-width: 375px) {
    margin-left: 10px;
    display: flex;
    flex-direction: column;
    h1 {
      font-size: 18px;
      margin-bottom: 12px;
    }
    h2 {
      font-size: 14px;
      color: var(--outline);
    }
    p {
      font-size: 12px;
    }
  }
  margin-left: 10px;
  justify-content: center;
`;
