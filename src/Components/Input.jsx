import React from 'react';

const Input = ({ id, pergunta, options }) => {
  return (
    <>
      <fieldset>
        <legend>{pergunta}</legend>
        {options.map((option) => (
          <label key={option}>
            <input type="radio" value={option} id={id} />
            {option}
          </label>
        ))}
      </fieldset>
    </>
  );
};

export default Input;
