import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './App.css';

const App = () => {
  const [steps, setSteps] = useState([{ id: 0, question: 'Quel est votre fruit préféré?', options: ['Option 1', 'Option 2'] }]); // Premier set d'options avec question
  const [selectedOptions, setSelectedOptions] = useState([]); // Suivi des choix précédents

  // Fonction qui gère la sélection d'une option
  const handleClick = (option, stepId) => {
    // Ajout du choix dans la liste des choix sélectionnés
    setSelectedOptions((prev) =>  [...prev, option], console.log(prev));
    
    // Ajout d'un nouveau set d'options après la sélection
    const newStepId = stepId + 1;
    const newOptions = [`Nouveau choix ${newStepId * 2 - 1}`, `Nouveau choix ${newStepId * 2}`];
    const newQuestion = `Quelle couleur préférez-vous ?`;  // Exemple de nouvelle question dynamique
    setSteps((prevSteps) => [...prevSteps, { id: newStepId, question: newQuestion, options: newOptions }]);
  };

  return (
    <div className="app-container">
      <div className="choices-container">
        {steps.map((step) => (
          <div key={step.id} className={`step-container step-${step.id}`}>
            {/* Affichage de la question au-dessus des choix */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="question"
            >
              <h2>{step.question}</h2>
            </motion.div>
            
            {/* Affichage des choix */}
            {step.options.map((option, index) => (
              <motion.button
                key={index}
                initial={{ opacity: 0, x: -200 }}  // Position initiale
                animate={{ opacity: 1, x: 0 }}      // Position finale
                transition={{ duration: 0.7 }}      // Transition fluide
                onClick={() => handleClick(option, step.id)}
                className="choice-btn"
              >
                {option}
              </motion.button>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
