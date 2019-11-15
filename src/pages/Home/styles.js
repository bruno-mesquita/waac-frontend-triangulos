import styled from 'styled-components';

import { TextField, Button } from '@material-ui/core';

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

  div {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
  }
`;

export const Saida = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
`;

export const Input = styled(TextField)``;

export const BtnAdd = styled(Button)`
  height: 35px;
  width: 30px;
`;

export const Btn = styled(Button)`
  width: 100px;
`;
