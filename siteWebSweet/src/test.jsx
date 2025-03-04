import { useState } from "react";
import { motion } from "framer-motion";

export default function SlidingChoices() {
  const [steps, setSteps] = useState([
    { choices: ["Option 1", "Option 2"], id: 0 }
  ]);

  const handleChoice = (choice) => {
    const newId = steps.length;
    setSteps((prev) => [
      ...prev,
      { choices: [`${choice} - A`, `${choice} - B`], id: newId }
    ]);
  };

  return (
    <div className="relative w-screen h-screen bg-gray-100 overflow-hidden flex items-center">
      {steps.map((step, index) => (
        <motion.div
          key={step.id}
          initial={{ x: 0 }}
          animate={{ x: `-${index * 15}%` }}
          transition={{ type: "spring", stiffness: 100 }}
          className="absolute w-3/4 h-3/4 flex items-center justify-center bg-white shadow-lg rounded-lg"
          style={{ left: `${index * 5}%`, zIndex: steps.length - index }}
        >
          <div className="flex gap-4">
            {step.choices.map((choice) => (
              <button
                key={choice}
                className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition"
                onClick={() => handleChoice(choice)}
              >
                {choice}
              </button>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
