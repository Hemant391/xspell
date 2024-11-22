import React, { useState } from "react";


function App() {
// Define a custom dictionary of words and their corrections
// const customDictionary = {

//   teh: "the",

//   wrok: "work",

//   fot: "for",

//   exampl: "example"

// };
const Dictionary = 
[
    { word: "React", meaning: "A JavaScript library for building user interfaces." },
    { word: "Component", meaning: "A reusable building block in React." },
    { word: "State", meaning: "An object that stores data for a component." }
];
const [input,setInput]=useState('');
const [answer,setAnswer]=useState('');
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



// const [input,setInput]=useState('');
// const [show,setShow]=useState(false)

 
// const handlesearch = (e) => {
//   let data=e.target.value.split(' ')
//   data.forEach((element,ind) => {
//     if(customDictionary[element]){
//       data[ind]= customDictionary[element]
//     }
//   });

  
 
  
//   setShow(true)
//   setInput(data.join(' '))
//   };


//   return (
//      <div>
//         <h1>Spell Check and Auto-Correction</h1>
//         <textarea name="" id="" onChange={handlesearch} placeholder="Enter text..."></textarea>
//       {show===true?(<p><span >Did you mean: </span><span>{input}?</span></p>):('')} 
//       </div>
//   );
// }

export default App;
