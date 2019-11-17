import styled from 'styled-components';

import { Button } from '@material-ui/core';

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

export const Entrada = styled.form`
  display: flex;
  flex-direction: column;
  width: 50%;

  h2 {
    font-size: 30px;
    align-self: center;
    margin-bottom: 10px;
  }

  p {
    margin-bottom: 15px;
  }

  div.lines {
    display: flex;
    flex-direction: column;

    ol {
      padding-left: 15px;
    }
  }

  div.btnIcons {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin: 10px;
  }
`;

export const Saida = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;

  h2 {
    font-size: 30px;
    align-self: center;
    margin-bottom: 20px;
  }

  span {
    align-self: center;
    margin: 10px;
  }

  div {
    align-self: center;
  }
`;

export const BtnIcon = styled(Button)`
  height: 25px;
  width: 150px;
`;

export const Btn = styled(Button)`
  width: 100px;
  align-self: center;
`;

export const Triangulo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    margin: 15px 15px 15px 23px;
  }
`;
