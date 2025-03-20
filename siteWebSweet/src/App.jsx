import React, { useState } from 'react';
import { useEffect } from "react";
import { motion } from 'framer-motion';
import './App.css';
import ChoixService from './ChoixService.jsx';
import Modal from './Modal.jsx'

const App = () => {
  const [step, setStep] = useState({ question: 'Le patient est-il conscient ?', options: ['Oui', 'Non'] }); // Premier set d'options avec question
  const questions = ['Le patient est-il conscient ?', 'Le patient a-t-il un pouls', 'Le patient respire t\'il ?']
  const [idStep, setIdStep] = useState(1)
  // Fonction qui gère la sélection d'une option
  
  const [check, setCheck] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const handleClick = (boolean) => {
    if (idStep == questions.length && boolean) {
      setCheck("Ok")
      return;
    }
    if (boolean) {
      if (idStep === 1) {
          setCheck("Ok");
        }
    }
    else {
      console.log("Pas ok!")
      if (idStep != 1) {
        setIsModalOpen(true)
        return;
      }
    }
    setStep({ question: questions[idStep], options: ['Oui', 'Non']});
    setIdStep(idStep + 1);
    return;
  };

  if (check === "Ok") {
    return <ChoixService option={true}/>; 
  }

  return (
    <div>
      <h2>{step.question}</h2>
      <button onClick={() => handleClick(true)} className="choice-btn-oui">
        {step.options[0]}
      </button>
      <button onClick={() => handleClick(false)} className="choice-btn-non">
        {step.options[1]}
      </button>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2 className="text-xl font-bold text-center">Titre du Pop-up</h2>
        <p className="mt-2 text-gray-600 text-center">Ceci est un vrai pop-up par-dessus le contenu.</p>
      </Modal>
    </div>
  );
};

export default App;
