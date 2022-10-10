import React, { useState } from "react"
import Data from './Data';
import './App.css';

function App() {
  const [text, setText] = useState('')

  const onchangeHandler = (e) => {
    setText(e.target.value)
  }

  return (
    <div className="container d-flex justify-content-center align-items-center bg-light mt-5">
      <div className='container my-3'>
        <div className='row text-center'>
          <div className='col-4 my-2'>
            <input type="text" className='form-control' placeholder="Enter your country" value={text} onChange={onchangeHandler} />
            {text.length !== 0 ?
              Data.filter((val) => {

                if (text === " ") {
                  return val;
                } else if (val.name.toLowerCase().startsWith(text.toLowerCase())) {
                  return val;
                }
              }).map((value) => {
                return (
                  <h6>{value.name}</h6>
                )

              })

              : "Please Enter Data"}

          </div>
        </div>
      </div>
    </div>
  )
}

export default App;
