import React, { useState, useCallback } from 'react';

import { FaPlus } from 'react-icons/fa';
import { Input } from '@material-ui/core';
import {
  Container,
  Paper,
  Entrada,
  Saida,
  Btn,
  BtnAdd,
  Triangulo,
} from './styles';

export default function Home() {
  // States
  const [matriz, setMatriz] = useState([[6], [3, 5], [9, 7, 1], [4, 6, 8, 4]]);

  // Add Line
  const handleAddLine = useCallback(() => {
    setMatriz([...matriz, []]);
  }, [matriz]);

  // Test
  const handleMatriz = useCallback((evt, e, pos) => {
    const { value } = evt.target;
    const array = value.split('').map(item => Number(item));
    matriz.splice(pos,1,array)
    setMatriz(matriz)
    console.log(array);
    console.log(matriz);
  }, [matriz]);

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
            Exemplo: [[6],[3,5],[9,7,1],[4,6,8,4]], cada posição da matriz deve
            ser inserida em cada linha.
          </p>
          <div>
            {matriz.map((element, index) => (
              <Input key={element[0]} placeholder={element} onChange={e => handleMatriz(e, element, index)}/>
            ))}
            <BtnAdd variant="contained" type='button' onClick={handleAddLine} >
              <FaPlus color="black" size={20} />
            </BtnAdd>
          </div>

          <Btn variant="contained" color="primary" type="submit">
            Calcular
          </Btn>
        </Entrada>
        <Saida>
          <h2>Resultado</h2>
          {matriz.map(item => (
              <Triangulo>
                {item.map(i => (
                  <span key={i}>{i}</span>
                ))}
              </Triangulo>
            ))}
          <span>Tempo de Execução: 2.4ms</span>
          <span>Soma: 26</span>
        </Saida>
      </Paper>
    </Container>
  );
}
