import { useState } from 'react';
import './App.css';
import { ATTRIBUTE_LIST, CLASS_LIST, SKILL_LIST } from './consts.js';
import Attributes from "./Components/Attributes";


function App() {
  const [num, setNum] = useState(0);
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Coding Exercise</h1>
      </header>
      <section className="App-container">
        <section className="App-section">
          <Attributes/>
        </section>
      </section>
    </div>
  );
}

export default App;
