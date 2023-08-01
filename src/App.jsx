import React from 'react';
import './App.css';
import Input from './Components/Input';
import Button from './Components/Button';

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
  const [slide, setSlide] = React.useState(0);

  const handleChange = ({ target }) => {
    setRespostas({ ...respostas, [target.id]: target.value });
  };

  const slideProximo = () => {
    setSlide(slide + 1);
    console.log(perguntas.length);
  };

  const slideVoltar = () => {
    setSlide(slide - 1);
  };

  return (
    <>
      <h1>Perguntas sobre React</h1>
      <section className="container">
        <form onSubmit={(event) => event.preventDefault()}>
          {perguntas.map((pergunta, index) => {
            return (
              <Input
                key={pergunta.id}
                id={pergunta.id}
                pergunta={pergunta.pergunta}
                options={pergunta.options}
                resposta={respostas[pergunta.id]}
                onChange={handleChange}
                index={index}
                slide={slide}
              />
            );
          })}
          <div className="btns">
            {slide === 0 ? null : slide > perguntas.length - 1 ? null : (
              <Button text="Voltar" onclick={slideVoltar} />
            )}
            {slide > perguntas.length - 1 ? null : (
              <Button
                text={slide === perguntas.length - 1 ? 'Finalizar' : 'Proxíma'}
                onclick={slideProximo}
              />
            )}
          </div>
        </form>
      </section>
    </>
  );
}

export default App;
