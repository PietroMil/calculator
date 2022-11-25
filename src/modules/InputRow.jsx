import { useState } from "react";
import { Operators } from "../components/calculator";

function InputRow() {
  const [row, setRow] = useState([]);

  const handleAdd = () => {
    const newRow = [...row, { value: "-", input: 0, active: true }];
    setRow(newRow);
  };

  const handleInput = (index, input) => {
    const newObj = [...row];
    newObj[index].input = input;
    setRow(newObj);
  };

  const handleSymbol = (index, value) => {
    const newSymbol = [...row];
    newSymbol[index].value = value;
    setRow(newSymbol);
  };

  const handleDisabled = (index) => {
    const newStatus = [...row];
    if (newStatus[index].active == true) {
      newStatus[index].active = false;
    } else {
      newStatus[index].active = true;
    }
    setRow(newStatus);
  };

  //splice.(index, 1)

  const handleDelete = (index) => {
    const newObj = [...row];
    newObj.splice(index, 1);
    setRow(newObj);
  };

  const resultView = Operators(row);

  console.log(row);
  return (
    <>
      <button onClick={() => handleAdd()}>Add</button>
      {row.map((row, index) => (
        <div key={index}>
          <select
            onChange={(e) => handleSymbol(index, e.target.value)}
            defaultValue={"-"}
          >
            <option>+</option>
            <option>-</option>
          </select>
          <input
            type="number"
            defaultValue={row.input}
            onChange={(e) => handleInput(index, e.target.value)}
          />
          <button
            onClick={() => {
              handleDelete(index);
            }}
          >
            Delete
          </button>
          <button onClick={() => handleDisabled(index)}>
            {row.active ? "disable" : "enable"}
          </button>
        </div>
      ))}
      <div>{resultView}</div>
    </>
  );
}

export default InputRow;
