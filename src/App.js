import { useState } from 'react';
import './App.css';

function App() {
  ///state of our application
  const[Weight, setWeight]=useState('');
  const[height, setheight]=useState('');
  const[bmi, setbmi]=useState('');
  const[message, setmessage]=useState('');

  //logic
 let calcBmi=(e)=>{
    e.preventDefault();
 if(Weight===0 || height===0){
  alert('please enter a valid weight and height')
 }
 else{
  let bmi =(Weight/(height*height)*703)
  setbmi(bmi.toFixed(1))

  //logic for message
  if(bmi<25){
    setmessage('you are underweight')
  }
  else if(bmi>=25 && bmi < 30){
    setmessage('you are a healthy weight')
  }
  else{
    setmessage('you are overweight')
  }
 }
 }

 ///reload
 let reload=()=>{
  window.location.reload()
 }






  return (
    <div className='App'>
      <div className='container'>
        <h2>BMI Calculator </h2>
        <form onSubmit={calcBmi}>
          <div>
            <h3>Weight(Ibs)</h3>
            <input
              type='text'
              placeholder='Enter Weight value'
              value={Weight}
              onChange={(e)=>setWeight(e.target.value)}
            />
          </div>
          <div>
            <h3>Height(In)</h3>
            <input
              type='text'
              placeholder='Enter height value'
              value={height}
              onChange={(e)=>setheight(e.target.value)}
            />
          </div>
          <div>
            <button className='btn' type='submit'>
              Submit
            </button>
            <button className='btn btn-outline' onClick={reload} type='submit'>
              Reload
            </button>
          </div>
          <div className='center'>
            <h3>Your BMI is:{bmi} </h3>
            <h4> {message}</h4>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
