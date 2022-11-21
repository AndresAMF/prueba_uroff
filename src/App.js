import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { fetchUrl } from "./Api/Api-connection";
import Cards from "./Components/Cards";
import Details from "./Components/Details";
import "./App.css";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const rawData = await fetchUrl();
      const response = await rawData.json();
      setData(response);
    };
    fetchData();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Cards data={data} />} />
        <Route path="details/:name" element={<Details />} />
      </Routes>
    </Router>
  );
}

export default App;
