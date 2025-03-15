import React, { useState } from 'react';
import { useEffect } from "react";
import { motion } from 'framer-motion';
import './App.css';
import Result from './Result.jsx';
const App = () => {
  const [steps, setSteps] = useState([{ id: 0, question: 'Le patient est-il conscient ?', options: ['Oui', 'Non'] }]); // Premier set d'options avec question
  const [selectedOptions, setSelectedOptions] = useState([]); // Suivi des choix précédents
  const questions = ['Le patient est-il conscient ?', "Le patient respire-t-il ?", "Le patient a-t-il un pouls ?", "Le patient a-t-il un pouls constant ?"];
  const MAX_QUESTIONS = 3;
  const resultat = [];
  const [disabledSteps, setDisabledSteps] = useState(new Set());
  // Fonction qui gère la sélection d'une option
  const handleClick = (option, stepId) => {
    if (disabledSteps.has(stepId)) return; // Si cette question a déjà été répondue, on ne fait rien

    // Ajouter l'étape aux étapes désactivées
    setDisabledSteps((prev) => new Set(prev).add(stepId));

    // Ajout du choix dans la liste des choix sélectionnés
    setSelectedOptions((prev) =>  [...prev, option]);

    console.log(option)

    // Ajout d'un nouveau set d'options après la sélection
    const newStepId = stepId + 1;
    const newOptions = [{ label: 'Oui', value: true }, { label: 'Non', value: false }];
    const newQuestion = questions[stepId + 1];  // Exemple de nouvelle question dynamique
    setSteps((prevSteps) => [...prevSteps, { id: newStepId, question: newQuestion, options: newOptions }]);
  };

  if (selectedOptions.length === MAX_QUESTIONS + 1) {
    return <Result selectedOptions={selectedOptions} questions={questions} />;
  }

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
                disabled={disabledSteps.has(step.id)}
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
