import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ScrollTopButton from './components/ScrollTopButton';

function App() {
  return (
    <div className="font-sans bg-body-light text-body scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <ScrollTopButton />
    </div>
  );
}

export default App;

