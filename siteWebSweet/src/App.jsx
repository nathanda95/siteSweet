import React, { useState } from 'react';
import { useEffect } from "react";
import { motion } from 'framer-motion';
import './App.css';
import ChoixService from './ChoixService.jsx';
import PopUp from './PopUp.jsx'

const App = () => {
  const [step, setStep] = useState({ question: 'Le patient est-il conscient ?', options: ['Oui', 'Non'] }); // Premier set d'options avec question
  const questions = ['Le patient est-il conscient ?', 'Le patient a-t-il un pouls', 'Le patient respire t\'il ?']
  const [idStep, setIdStep] = useState(1)
  // Fonction qui gère la sélection d'une option
  const [textPopup, setTextPopup] = useState("Text Par defaut")
  const [check, setCheck] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);
  
  function modifyPopupText() {
    if (idStep === 2)
    {
      setTextPopup(`
        - Massage cardiaque
        - Défibrilateur
        - Electrode`)
    }
    else if (idStep === 3)
      {
        setTextPopup(`
          - Pneumothorax -> Aiguille dans la plèvre (et pose d'un drain)
          - Intubation -> Ventillation manuelle
          - Trachéotomie -> Respirateur`)
      }
    else {
      setTextPopup("Ce texte ne devrait jamais s'afficher")
    }
    return;
  }

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
      modifyPopupText()
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

      <PopUp isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <p className="mt-2 text-gray-600 text-center" style={{ whiteSpace: "pre-line" }} >{textPopup}</p>
      </PopUp>
    </div>
  );
};

export default App;
