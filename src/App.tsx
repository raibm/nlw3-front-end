import React from "react";
import { FiArrowRight } from "react-icons/fi";

import './styles/global.css';
import './styles/pages/landing.css';

import logoImg from './images/Logo.svg';

interface titleProps {
  text: string;
}

function Title(props: titleProps){
  return (
      <h1>{props.text}</h1>
  );
}

function App() {
  return (
    <div id="page-landing">
      <div className="content-wrapper">
        <img src={logoImg} alt="Raippy"/>

        <main>
          <h1>Leve felicidade para o mundo</h1>
          <p>Visite orfanatos e mude o dia de muitas crianças.</p>
        </main>

        <div className="location">
          <strong>São Gabriel da Palha</strong>
          <span>Espirito Santo</span>
        </div>

        <a href="" className="enter-app">
          <FiArrowRight size={26} color="rbg(0,0,0,0.6)"/>
        </a>
      </div>
    </div>
  );
}

export default App;
