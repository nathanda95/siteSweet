import React from 'react';

const Result = ({ selectedOptions, questions }) => {
  return (
    <div className="result-container">
      <h2>Vos choix finaux :</h2>
      <ul>
        {selectedOptions.map((option, index) => (
          <li key={index}>{questions[index]} {option}</li>
        ))}
      </ul>
    </div>
  );
};

export default Result;
