import React from 'react';
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from './components/FoodItems';
function App() {
  let foodItems = ["Pizza", "Burger", "Pasta", "Ice Cream" , "Salad"];

  // if (foodItems.length === 0) {
  //   return <h3>I am hungry due to no foods</h3>;
  // }
  return <React.Fragment>
    {/* instead of using div to wrap the elements, we can use React.Fragment or <> </> to wrap the elements */}

    <h1>Healthy Foods</h1>
{foodItems.length ===0 ? <h3>I am hungry due to no foods</h3> :null}
    {/* <ul className="list-group">
      {foodItems.map((item) => (
        <li key={item} className="list-group-item">{item}</li>
      ))}
    </ul> */}
    <FoodItems></FoodItems>
  </React.Fragment>
}

export default App;
