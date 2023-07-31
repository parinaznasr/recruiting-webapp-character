import { useState } from 'react';
import './App.css';
import { ATTRIBUTE_LIST, CLASS_LIST, SKILL_LIST } from './consts.js';
import Attributes from "./Components/Attributes";
import Classes from "./Components/Classes";

function App() {
  // Initialize attributes values with 10 for each attribute
  const initialAttributes= {};
  ATTRIBUTE_LIST.forEach( attribute => initialAttributes[attribute] = 10 );

  const [attributes, setAttributes] = useState(initialAttributes);
  const [num, setNum] = useState(0);

  const meetsClassRequirements = (className) => {
    const classRequirements = CLASS_LIST[className];
    return ATTRIBUTE_LIST.every((attribute) => attributes[attribute] >= classRequirements[attribute]);
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Coding Exercise</h1>
      </header>
      <section className="App-container">
        <section className="App-section">
          <Attributes attributes= {attributes} setAttributes={setAttributes}/>
        </section>
        <section className="App-section">
          <Classes classList={CLASS_LIST} attributes = {attributes}/>
        </section>
      </section>
    </div>
  );
}

export default App;
