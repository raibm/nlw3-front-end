import React from "react";

import './styles/global.css';
import './styles/pages/landing.css';

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
      <Title text="Hello World!"/>
    </div>
  );
}

export default App;
