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
  const [respostas, setRespostas] = React.useState({
    p1: '',
    p2: '',
    p3: '',
    p4: '',
  });

  const handleChange = ({ target }) => {
    setRespostas({ ...respostas, [target.id]: target.value });
  };

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
                resposta={respostas[pergunta.id]}
                onChange={handleChange}
              />
            );
          })}
        </form>
      </section>
    </>
  );
}

export default App;
