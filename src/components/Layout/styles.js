import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
`;

export const Wrapper = styled.div`
  @media (max-width: 375px) {
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      margin-top: 5px;
    }
  }
  flex-direction: column;
  margin: 0 auto;
  max-width: 933px;
  /* display: flex;
  align-items: unset; */

  /* button{
    display: flex;
    justify-content: flex-end
  } */
`;

export const Header = styled.div`
  @media (max-width: 375px) {
    position: sticky;
    margin-top: 5px;
    min-height: 60px;
  }
  display: flex;
  flex-direction: column;
  min-height: 70px;
  width: 100%;
`;

export const Tab = styled.ul`
  margin-top: 15px;
  list-style: none;
  display: flex;
  @media (max-width: 375px) {
    li {
      max-width: 90px;
      font-size: 12px;
      cursor: pointer;
      margin-left: 15px;
      &:hover {
        border-bottom: 2px solid var(--primary);
      }
    }

    li a strong {
      color: var(--primary);
      font-size: 20px;
    }

    li button {
      font-size: 16px;
      background: #ffffff;
    }
  }

  @media (min-width: 375px) {
    margin-top: 90px;
    position: absolute;
  }

  li {
    /* max-width: 90px; */
    /* font-size: 12px; */
    cursor: pointer;
    margin-right: 15px;
    /* margin-left: 15px; */
    &:hover {
      border-bottom: 2px solid var(--primary);
    }
  }

  li a strong {
    color: var(--primary);
    /* font-size: 20px; */
  }

  li button {
    /* font-size: 16px; */
    background: #f5f1f1;
  }
`;

export const BuscaAvancada = styled.h6`
  @media (max-width: 375px) {
    display: flex;
    justify-items: left;
    text-decoration: underline;
    cursor: pointer;
  }
  display: none;
`;

export const WebHeader = styled.div`
  @media (max-width: 375px) {
    background: #fff;
  }
  background: #f5f1f1;
`;
