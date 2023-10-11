import { useState, useEffect } from 'react'
import './App.css'
import Header from './Components/Header';

function App() {
  const [count, setCount] = useState(2);
  const [data, setData] = useState([]);

  useEffect(()=>{
    async function getData(){
      let id=2;
      const get= await fetch(`https://hub.dummyapis.com/employee?noofRecords=${count}&idStarts=1001`)
      const res= await get.json();      
      setData(res);
    }
    getData();

    document.title = `(${count}) Employees Online`;

    }, [count]);

  return (
    <>
      <Header/>
      <div className='my-buttons'>
      <button className='btn' onClick={()=>{setCount(count+1)}}>Add Value {count}</button>     
      </div>
      {
        data.map((element, index)=>{
          return (
            <div key={index} className='data'>
              <div>
              <h4>{element.firstName} {element.lastName}</h4>
              </div>
              <h4>{element.email}</h4>
            </div>
          )
        })
      }
    </>
  )
}

export default App