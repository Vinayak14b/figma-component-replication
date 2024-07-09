// made by shrivinayak Birla
import React from 'react';
import ButtonComponent from './components/ButtonComponent';
import CheckboxListComponent from './components/CheckboxListComponent';
import HomePageComponent from './components/HomePageComponent';
import AllPages from './components/AllPagesCheckboxList';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <ButtonComponent />
      <CheckboxListComponent />
      <HomePageComponent />
      <AllPages />
    </div>
  );
}

export default App;
