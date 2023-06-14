import React from 'react';
import './App.css';
import Header from './components/Header';
import Projects from './pages/Projects';
import Info from './pages/Info';
import Tech from './pages/Tech';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Info />
      <Tech />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
