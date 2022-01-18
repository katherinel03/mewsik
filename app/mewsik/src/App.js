import logo from './logo.png';
import './App.css';
import Text2Music from './Text2Music';
import React, { useState } from 'react';

function App() {
  const [pageNumber, setPageNumber] = useState(1);

  function onLogoClick() {
    setPageNumber(2);
    console.log('hii');
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
        <Text2Music></Text2Music>
      </div>
    );
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
