import { Button, TextField } from "@mui/material";
import { useState } from "react";

//אינפוט להוספת משימה
export default function Input({ addItem }) {
  const [data, setData] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newItem = {
      item: data,
      id: Math.floor(Math.random() * 1000000),
    };
    console.log(newItem);
    addItem(newItem);
    setData("");
  };

  return (
    <label>
      <TextField
        sx={{ width: '65%', borderRadius: '0px' }}
        id="outlined-multiline-flexible"
        maxRows={4}
        type="text"
        onChange={(e) => setData(e.target.value)}
        value={data}
      />
      <Button
        sx={{width: '78px', height:'56px' }}
        variant="contained"
        type="submit"
        onClick={handleSubmit} 
      >
        Add
      </Button>
    </label>
  );
}
