import './App.css';
import DisplaySimpson from './components/displaySimpson';
import axios from 'axios';
import React, { useEffect, useState } from "react";




function App() {

  const [simpson, setSimpson] = useState("");

  const getQuote = () => {
    // Send the request
    axios
      .get('https://simpsons-quotes-api.herokuapp.com/quotes')
      // Extract the DATA from the received response
      .then((response) => response.data)
      // Use this data to update the state
      .then((data) => {
        setSimpson(data[0]);
      });
  };


  return (

    <div className='App'>

      <DisplaySimpson simpson={simpson} />
      <button type="button" onClick={getQuote}>Get quote</button>

    </div>

  );

}

export default App;
