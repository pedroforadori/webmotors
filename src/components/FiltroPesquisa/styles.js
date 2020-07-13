import styled from 'styled-components';

export const Selects = styled.div`
  @media (max-width: 375px) {
    display: flex;
    flex-direction: column;
  }
  display: flex;
  justify-content: space-between;
`;

export const Formulario = styled.form`
  @media (max-width: 375px) {
    display: ${(props) => props.display};
    width: 90%;
    /* justify-content: center; */
    /* height: 100vh; */

    input[type='checkbox'] {
      width: 20px;
    }

    select {
      padding: 12px 20px;
      margin: 8px 0;
      box-sizing: border-box;
      color: rgb(118, 118, 118);
      border: 1px solid var(--outline);
    }
  }

margin-top: 10px;
  /* display: ${(props) => props.display}; */
  /* justify-content: center; */
  /* height: 100vh; */

  input[type='checkbox'] {
    width: 20px;
  }

  select {
    /* padding: 12px 20px; */
    /* margin-top: 8px 8px 8px 8px; */
    width: 100%;
    height: 40px;
    box-sizing: border-box;
    color: rgb(118, 118, 118);
    border: 1px solid var(--outline);
    margin-right: 10px;
    margin-top: 10px;
  }
`;
