import React, { useState, useEffect } from "react";
import { fetchUrl } from "./Api/Api-connection";
import Cards from './Components/Cards';
import './App.css';


function App() {

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const rawData = await fetchUrl();
      const response = await rawData.json();
      setData(response);
      
    }
    fetchData();
    
  }, [])

  return (
    <>
    <Cards data={data}/>
    </>
  );
}

export default App;
