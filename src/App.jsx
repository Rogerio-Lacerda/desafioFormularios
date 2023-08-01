import React from 'react';
import './App.css';
import Input from './Components/Input';

const perguntas = [
  {
    pergunta: 'Qual método é utilizado para criar componentes?',
    options: [
      'React.makeComponent()',
      'React.createComponent()',
      'React.createElement()',
    ],
    resposta: 'React.createElement()',
    id: 'p1',
  },
  {
    pergunta: 'Como importamos um componente externo?',
    options: [
      'import Component from "./Component"',
      'require("./Component")',
      'import "./Component"',
    ],
    resposta: 'import Component from "./Component"',
    id: 'p2',
  },
  {
    pergunta: 'Qual hook não é nativo?',
    options: ['useEffect()', 'useFetch()', 'useCallback()'],
    resposta: 'useFetch()',
    id: 'p3',
  },
  {
    pergunta: 'Qual palavra deve ser utilizada para criarmos um hook?',
    options: ['set', 'get', 'use'],
    resposta: 'use',
    id: 'p4',
  },
];

function App() {
  return (
    <>
      <h1>Perguntas sobre React</h1>
      <section className="container">
        <form>
          {perguntas.map((pergunta) => {
            return (
              <Input
                key={pergunta.id}
                id={pergunta.id}
                pergunta={pergunta.pergunta}
                options={pergunta.options}
              />
            );
          })}
        </form>
      </section>
    </>
  );
}

export default App;
