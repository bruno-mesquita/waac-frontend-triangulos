import React, { useState, useCallback, useEffect } from 'react';
import { Input } from '@material-ui/core';
// import { FaPlus, FaMinus } from 'react-icons/fa';

import {
  Container,
  Paper,
  Entrada,
  Saida,
  Btn,
  // BtnIcon,
  Triangulo,
} from './styles';

import api from '../../services/api';

export default function Home() {
  // States
  const [matriz, setMatriz] = useState([[6], [3, 5], [9, 7, 1], [4, 6, 8, 4]]);
  const [selected, setSelected] = useState([]);
  const [sum, setSum] = useState();
  const [setTime] = useState();

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
  // const handleRemoveLine = useCallback(() => {
  //  const newMatriz = matriz;
  //  newMatriz.splice(matriz.length - 1, 1);
  //  setMatriz(newMatriz);
  //  console.log(matriz);
  // }, [matriz]);

  // Add Line  -- Função com Bugs -- Inativa
  // const handleAddLine = useCallback(() => {
  //  setMatriz([...matriz, []]);
  // }, [matriz]);

  // handleMatriz
  const handleMatriz = useCallback(
    (evt, pos) => {
      const { value } = evt.target; // Pegando o evento digitado pelo usuario
      const array = value.split('').map(item => Number(item)); // Converte todo array para o tipo number.
      const newMatriz = matriz;
      newMatriz.splice(pos, 1, array); // substitui os elementos no array pelos novos inseridos.
      setMatriz(newMatriz);
    },
    [matriz]
  );

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
    [matriz, setTime]
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
            Cada linha da matriz deve ser inserida em cada linha.(sem vírgula).
            <br />
            Cada linha deve conter o número de elementos dado pela linha.
            Exemplo: linha 1: 2, linha 2: 45
          </p>
          <div className="lines">
            <ol>
              {matriz.map((element, index) => (
                <li>
                  <Input
                    key={element[0].toString()}
                    onChange={e => handleMatriz(e, index)}
                    defaultValue=""
                  />
                </li>
              ))}
            </ol>
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
                <span>{i}</span>
              ))}
            </Triangulo>
          ))}
          <span>Tempo de Execução: 2.4ms</span>
          <span>
            Matriz:{' '}
            {matriz.map((itens, index) => (
              <>
                [
                {itens.map((item, pos) => (
                  <>
                    {item}
                    {itens.length - 1 === pos ? '' : ', '}
                  </>
                ))}
                ]{matriz.length - 1 === index ? ' ' : ', '}
              </>
            ))}
          </span>
          <span>
            Números Selecionados:{' '}
            {selected.map((i, p) => (
              <>
                {i}
                {selected.length - 1 === p ? '' : ', '}
              </>
            ))}
          </span>
          <span>Soma: {sum || 'Sem Soma'}</span>
        </Saida>
      </Paper>
    </Container>
  );
}
