import { useState } from "react";


export default function TodoItem() {
  const [items, setItems] = useState([]);
  const [inputVal, setInputVal] = useState('')

  const handleInput = (e) => {
    setInputVal(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(inputVal){                 
      setItems([...items, {text: inputVal, completed: false}])       
      setInputVal('');
    }
  }

  const handleCheckbox = (index) => {
    const newItems = [...items]
    newItems[index].completed = !newItems[index].completed;
    setItems(newItems)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
      <label >
        <input 
          type="text" 
          value={inputVal}
          onChange={handleInput} 
        />
        <button>Add</button>
      </label>
      
      </form>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <input
             type="checkbox"
              checked={items.completed}
              onChange={() => handleCheckbox(index)} />
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
}
