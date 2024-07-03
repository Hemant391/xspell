import React, { useState } from "react";


function App() {
// Define a custom dictionary of words and their corrections
const Dictionary = 
[

    { word: "React", meaning: "A JavaScript library for building user interfaces." },

    { word: "Component", meaning: "A reusable building block in React." },

    { word: "State", meaning: "An object that stores data for a component." }

];


const [input,setInput]=useState('');
const [answer,setAnswer]=useState('')

 
 const handlesearch = () => {
    let result=Dictionary.filter(e=>e.word.toLowerCase()===input.toLowerCase());
    console.log(result)
    if(result.length>0){
      setAnswer(result[0].meaning)
    }else{
      setAnswer('Word not found in the dictionary.')
    }
  };


  return (
     <div>
        <h1>Dictionary App</h1>
        <input type="text" value={input} onChange={(e)=>setInput(e.target.value)} placeholder="Search for a word..." />
       <button type="button" onClick={handlesearch} >Search</button>
       <h3>Definition:</h3>
       {answer?<p>{answer}</p>:''}
       
      </div>
  );
}

export default App;
