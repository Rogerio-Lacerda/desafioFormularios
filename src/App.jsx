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
  const [resultado, setResultado] = React.useState(null);

  const handleChange = ({ target }) => {
    setRespostas({ ...respostas, [target.id]: target.value });
  };

  const resultadoFinal = () => {
    const valor = perguntas.filter(
      ({ id, resposta }) => resposta === respostas[id],
    );
    setResultado(`Você acertou ${valor.length} de ${perguntas.length}`);
  };

  const slideProximo = () => {
    if (respostas[`p${slide + 1}`] === '') {
      alert('Escolha uma opção');
    } else {
      setSlide(slide + 1);
      resultadoFinal();
    }
  };

  const slideVoltar = () => {
    setSlide(slide - 1);
    resultadoFinal();
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
        {slide > perguntas.length - 1 ? (
          <p className="resultado">{resultado}</p>
        ) : null}
        {slide > perguntas.length - 1
          ? perguntas.map(({ pergunta, options, resposta, id }) => (
              <fieldset key={id} className="respostas">
                <legend>{pergunta}</legend>
                {options.map((item) => {
                  if (item === resposta) {
                    return (
                      <p key={item} className="certa">
                        {item}
                      </p>
                    );
                  } else {
                    return (
                      <p
                        key={item}
                        className={respostas[id] === item ? 'errada' : ''}
                      >
                        {item}
                      </p>
                    );
                  }
                })}
              </fieldset>
            ))
          : null}
      </section>
    </>
  );
}

export default App;
