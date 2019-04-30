import React from 'react';
import logo from './logo.svg';
import './App.css';
import data from './TreeData.json';
import TreeNode from './TreeNode';

function App() {
  return (
    <div className="App">
      App
      <TreeNode data={data} />
    </div>
  );
}

export default App;
