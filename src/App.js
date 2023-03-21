import "./App.css";
import { useState } from "react";

import Navbar from "./component/Navbar";
import Input from "./component/Input";

function App() {
  const [items, setItems] = useState([]);
  
  const addItem = (item) => {
    setItems((prevItems) => {
      return [...prevItems, item];
    });
  };

  return (
    <div className="App">
      <Navbar />
      <form action=""  style={{maxWidth: '1200px', minWidth: '500px'}}>
        <Input addItem={addItem} />
        <ul>
          {items.map((item) => (
            <li key={item.id} style={{listStyleType: 'none'}}>{item.item}</li>
          ))}
        </ul>
      </form>
    </div>
  );
}

export default App;
