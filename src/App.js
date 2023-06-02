
import './App.css';
import foods from "./foods.json";
import React, { useState } from 'react';
import { useEffect } from 'react';

function App() {
  const [foodse, setFoods] = useState([]);

  useEffect(() => {
    setFoods(foods);
  }, []);

  return (
    <div>
    <h2>Food List</h2>
      {foodse.map((food, index) => (
        <div key={index}>
          <p>{food.name}</p>
          <img src={food.image} width={100} alt={food}/>
        </div>
      ))}
    </div>
  );
}

export default App;
