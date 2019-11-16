import React, { useState, useCallback, useEffect } from 'react';
import { Input } from '@material-ui/core';
// import { FaPlus, FaMinus } from 'react-icons/fa';

import {
  Container,
  Paper,
  Entrada,
  Saida,
  Btn,
  BtnIcon,
  Triangulo,
} from './styles';

import api from '../../services/api';

export default function Home() {
  // States
  const [matriz, setMatriz] = useState([[6], [3, 5], [9, 7, 1], [4, 6, 8, 4]]);
  const [selected, setSelected] = useState([]);
  const [sum, setSum] = useState();
  const [time, setTime] = useState();

  // funciona como o ComponentDidMount na classe, chamado toda vez que o componente é construido.
  useEffect(() => {
    const localMatriz = localStorage.getItem('Matriz');
    const localSum = localStorage.getItem('Sum');
    const localSelected = localStorage.getItem('Selected');

    if (localMatriz) {
      setMatriz(JSON.parse(localMatriz));
    }

    if (localSum) {
      setSum(JSON.parse(localSum));
    }

    if (localSelected) {
      setSelected(JSON.parse(localSelected));
    }
  }, []);

  // Remove Line -- Função com Bugs -- Inativa
  const handleRemoveLine = useCallback(() => {
    const newMatriz = matriz;
    newMatriz.splice(matriz.length - 1, 1);
    setMatriz(newMatriz);
    console.log(matriz);
  }, [matriz]);

  // Add Line  -- Função com Bugs -- Inativa
  const handleAddLine = useCallback(() => {
    setMatriz([...matriz, []]);
  }, [matriz]);

  // handleMatriz
  const handleMatriz = useCallback(
    (evt, pos) => {
      const { value } = evt.target;
      const array = value.split('').map(item => Number(item)); // Converte todo array para o tipo number.
      const newMatriz = matriz;
      newMatriz.splice(pos, 1, array); // substitui os elementos no array pelos novos inseridos.
      setMatriz(newMatriz);
    },
    [matriz]
  );
  console.log(matriz);

  // Submit
  const handleSubmit = useCallback(
    async e => {
      e.preventDefault();
      const res = await api.post('/triangles', { content: matriz });
      const { triangle } = res.data;

      setMatriz(triangle.content);
      setSum(triangle.result);
      setTime(triangle.time);
      setSelected(triangle.selected);

      localStorage.setItem('Matriz', JSON.stringify(triangle.content));
      localStorage.setItem('Sum', JSON.stringify(triangle.result));
      localStorage.setItem('Selected', JSON.stringify(triangle.selected));
    },
    [matriz]
  );

  return (
    <Container>
      <h1>Waac</h1>
      <Paper>
        <Entrada onSubmit={handleSubmit}>
          <h2>Desafio</h2>
          <p>
            Descrição: Dado um triângulo de números, encontre o total máximo de
            cima para baixo.
          </p>
          <p>
            Exemplo: [[6],[3,5],[9,7,1],[4,6,8,4]], cada posição da matriz deve
            ser inserida em cada linha.(sem vírgula)
          </p>
          <div className="lines">
            {matriz.map((element, index) => (
              <Input
                key={element[0]}
                placeholder={element}
                onChange={e => handleMatriz(e, index)}
              />
            ))}
          </div>
          {/* <div className="btnIcons">
            <BtnIcon variant="contained" type="button" onClick={handleAddLine}>
              <FaPlus color="black" size={14} />
            </BtnIcon>
            <BtnIcon
              variant="contained"
              type="button"
              onClick={handleRemoveLine}
            >
              <FaMinus color="black" size={14} />
            </BtnIcon>
          </div>  */}
          <br />
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
          <span>Soma: {sum || 'Sem Soma'}</span>
          <span>Números Selecionados: {selected}</span>
        </Saida>
      </Paper>
    </Container>
  );
}
