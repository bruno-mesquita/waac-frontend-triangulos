import React, { useState, useCallback } from 'react';

import { FaPlus } from 'react-icons/fa';
import Line from '../../components/Line';
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
  const [lines, setLines] = useState([[6], [3, 5], [9, 7, 1], [4, 6, 8, 4]]);

  // Add Line
  const handleAdd = useCallback(() => {
    setLines([...lines, []]);
  }, [lines]);

  console.log(lines);

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
            ser inserida em uma linha.
          </p>
          <div>
            {lines.map((e, i) => (
              <Line key={e} label={`Linha ${i + 1}`} placeholder={e} />
            ))}
            <BtnAdd variant="contained" onClick={handleAdd}>
              <FaPlus color="black" size={20} />
            </BtnAdd>
          </div>

          <Btn variant="contained" color="primary">
            Calcular
          </Btn>
        </Entrada>
        <Saida>
          <h2>Resultado</h2>
          {lines.map(item => (
            <Triangulo>
              {item.map(i => (
                <span>{i}</span>
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
