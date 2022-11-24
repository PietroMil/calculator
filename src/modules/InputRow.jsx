import { useEffect } from "react";


function InputRow() {

    


    const myObject = {
        value: '-',
        input: 10,
        active: true
    }
    

    const handleOnchange = (event) => {
        console.log(event.target.value);
        myObject.input = event.target.value
        console.log(myObject)
    }
    
    const handleOperation = (event) => {
        console.log(event.target.value)
        myObject.value = event.target.value
        console.log(myObject)
    }
    
    
    
    const handleDisabled = () => {
       myObject.active = !myObject.active
      
    }
    const condition = myObject.active
    console.log(condition)


  return (
   <>
   <select onChange={handleOperation} defaultValue={'+'}>
          <option>+</option>
          <option>-</option>
        </select>
        <input type="text" onChange={handleOnchange}/>
        <button>Delete</button>
        <button onClick={handleDisabled}>{condition ? 'Disable' : 'Enable' }</button></>
  );
}

export default InputRow;
