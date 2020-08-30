import React from 'react';
import './App.css'
import Hello from './hello'

function App({ name, age }) {
  return (
    <div className="App">Hello My Name is {name} and My Age is {age}
      <p>This is just calculation of 25 - 10 = {25 - 10}</p>
      <p>This is just calculation of 55 - 10 = {55 - 10}</p>

      <Hello dishName1="Karahi" dishName2="Biryani" dishName3="Qourma" dishName4="Haleem"/>
    </div>
  );
}

export default App;
