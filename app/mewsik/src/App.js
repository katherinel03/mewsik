import logo from './logo.png';
import './App.css';
import Text2Music from './Text2Music';
import Music from './Music';
import React, { useState } from 'react';

function App() {
  const instrumentList = ["amsynth", "fmsynth", "membranesynth", "monosynth", "polysynth", "synth"];

  const [pageNumber, setPageNumber] = useState(1);
  const [text, setText] = useState('I love you <3');
  const [inst, setInst] = useState('synth');
  function onLogoClick() {
    setPageNumber(2);
  }

  function onSubmitClick() {
    setPageNumber(3);
  }

  function onBackClick() {
    setPageNumber(2);
  }

  let pageContent;
  if (pageNumber === 1) {
    pageContent = (
      <div>
        <img src={logo} onClick={onLogoClick} className="App-logo" alt="logo" />
        <p className="click-text">
          click hehe ^
        </p>
      </div>
    );
  }
  else if (pageNumber === 2) {
    pageContent = (
      <div>
        <Text2Music 
          onSubmitClick={onSubmitClick}
          text={text}
          setText={setText}
          inst={inst}
          setInst={setInst}
          instrumentList={instrumentList}>
        </Text2Music>
      </div>
    );
  }
  else if (pageNumber === 3) {
    pageContent = (
      <div>
        <Music onBackClick={onBackClick} text={text} inst={inst}></Music>
      </div>
    )
  }

  return (
    <div className="App">
      <header className="App-header">
        {pageContent}
      </header>
    </div>
  );
}

export default App;
