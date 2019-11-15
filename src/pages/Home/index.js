import React from 'react';

import { Button } from '@material-ui/core';

import { Container, Paper, Entrada, Saida, Input } from './styles';

export default function Home() {
  return (
    <Container>
      <h1>Waac</h1>
      <Paper>
        <Entrada>
          <h2>Desafio</h2>
          <p>
            Descrição: Dado um triângulo de números, encontre o total máximo de
            cima para baixo.
          </p>
          <p>
            Exemplo: [[6],[3,5],[9,7,1],[4,6,8,4]], cada prosição da matriz deve
            ser inserida em uma linha.
          </p>

          <Input label="Linha 1" placeholder="Exemplo: 6" />
          <Button variant="contained" color="primary">
            Calcular
          </Button>
        </Entrada>
        <Saida>
          <h1>Resultado</h1>
        </Saida>
      </Paper>
    </Container>
  );
}
