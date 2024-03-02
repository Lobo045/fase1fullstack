import React from 'react';
import './App.css';
import Header from './components/header'
import Side from './components/side'
import ListDB from './components/listdb';
import MyFormComponent from './components/formdb';



function App() {
  return (
    <div className="App">
      <Header />
      <main>
      <h1>Project Management</h1>
      <MyFormComponent />
      <ListDB />
      </main>
      <Side />
    </div>
  );
}

export default App;