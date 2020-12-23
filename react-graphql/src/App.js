import React,{useState} from 'react';

import './App.css';

function App() {
const [firstName,setFirstName] = useState('');
const [data,setData] = useState('');

const settingdata = ()=>{
  fetch('http://localhost:3001/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify({
      query:`mutation{
        createTeacher(input:{firstName:"${firstName}"}){
          id
          firstName
        }
      }`
     
    })
  })
    .then(r => r.json())
    .then(data => setData(data.data.createTeacher.firstName));
};

  return (
    <div className="App">
      <input value = {firstName} onChange={(e)=>{setFirstName( e.target.value)}} type='text'></input>
     <button onClick={()=>settingdata()}>get</button>
     {data}
    </div>
  );
}

export default App;
