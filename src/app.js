/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  const generateNewExcuseButton = document.querySelector(
    "#generate-new-excuse"
  );
  const newExcuse = document.querySelector("#new-excuse");

  const randomItemFromArray = target => {
    const randomItem = Math.floor(Math.random() * target.length);
    return target[randomItem];
  };

  const excuses = {
    intros: [
      `Lamento no poder ir,`,
      "Disculpen mi ausencia,",
      "Esto va a parecer una locura, pero",
      `No vas a creer esto:`,
      `No puedo ir porque`,
      "Sé que me vas a odiar pero",
      "Me siento fatal pero",
      "Esto va a sonar como una excusa, pero"
    ],
    who: [
      "mi sobrino",
      "el fantasma de Hitler",
      "el Papa",
      "mi ex",
      "una banda de música de instituto",
      "Darth Vader",
      "un payaso triste",
      "mi cita de Tinder",
      "un equipo profesional de cricket",
      "mi abuela",
      "mi llama",
      "una cebra"
    ],
    action: [
      "acaba de cagar la cama",
      "murió delante de mí",
      "no para de contarme chistes de toc toc",
      "está teniendo un ataque de nervios",
      "vertió limonada en mi tanque de gasolina",
      "me apuñaló",
      "encontró mi bolsa de dientes humanos",
      "robó mi bicicleta",
      "me envenenó de nuevo",
      "no paraba de tirarse pedos",
      "me está mirando fijamente"
    ]
  };

  const generateNewExcuse = () => {
    const intro = randomItemFromArray(excuses.intros);
    const who = randomItemFromArray(excuses.who);
    const action = randomItemFromArray(excuses.action);
    const excuse = `${intro} ${who} ${action}`;
    newExcuse.innerText = excuse;
  };

  generateNewExcuseButton.addEventListener("click", generateNewExcuse);
};
