import React, { useState } from "react";


function App() {
// Define a custom dictionary of words and their corrections
const customDictionary = {

  teh: "the",

  wrok: "work",

  fot: "for",

  exampl: "example"

};



const [input,setInput]=useState('');
const [show,setShow]=useState(false)

 
const handlesearch = (e) => {
  let data=e.target.value.split(' ')
  data.forEach((element,ind) => {
    if(customDictionary[element]){
      data[ind]= customDictionary[element]
    }
  });
  
 
  
  setShow(true)
  setInput(data.join(' '))
  };


  return (
     <div>
        <h1>Spell Check and Auto-Correction</h1>
        <textarea name="" id="" onChange={handlesearch} placeholder="Enter text..."></textarea>
      {show===true?(<p><span >Did you mean: </span><span>{input}</span></p>):('')} 
      </div>
  );
}

export default App;
