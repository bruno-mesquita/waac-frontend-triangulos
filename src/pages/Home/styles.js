import styled from 'styled-components';

import { TextField } from '@material-ui/core';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 50px;
    margin: 50px;
  }
`;

export const Paper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  background: white;
  padding: 15px;
  border-radius: 4px;
  border: solid 1px;
  border-color: #d3d3d3;
`;

export const Entrada = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;

  h2 {
    font-size: 30px;
    align-self: center;
    margin-bottom: 20px;
  }

  p {
    margin-bottom: 15px;
  }
`;

export const Saida = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
`;

export const Input = styled(TextField)`
  width: 60%;
`;
