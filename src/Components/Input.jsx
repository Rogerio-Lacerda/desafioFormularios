import React from 'react';

const Input = ({ id, pergunta, options, resposta, onChange, slide, index }) => {
  if (slide !== index) return null;
  else
    return (
      <>
        <fieldset>
          <legend>{pergunta}</legend>
          {options.map((option) => (
            <label key={option}>
              <input
                type="radio"
                value={option}
                id={id}
                onChange={onChange}
                checked={option === resposta}
              />
              {option}
            </label>
          ))}
        </fieldset>
      </>
    );
};

export default Input;
