import { select } from 'framer-motion/client';
import React from 'react';
import './ChoixService.css'

const ChoixService = ({  }) => {
  return (
    <div className="result-container">
      <button class="choice-btn-oui">Cardiologie</button>
      <button class="choice-btn-oui">Orthopédie</button>
      <button class="choice-btn-oui">Plastique/Dermatologie</button>
      <button class="choice-btn-oui">Gynécologie</button>
      <button class="choice-btn-oui">Neurologie</button>
      <button class="choice-btn-oui">Traumatologie</button>
    </div>
  );
};

export default ChoixService;
