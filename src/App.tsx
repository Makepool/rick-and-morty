import React from 'react';
import Header from './header';
import Footer from './footer';
import './App.scss';

function App() {
  return (
    <>
      <div className="everything-but-footer">
        <Header/>
      </div>
      <Footer/>
    </>
  );
}

export default App;
