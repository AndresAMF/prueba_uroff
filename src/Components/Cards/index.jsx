import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Banner from '../Banner'
import "./styles.css";

function Cards({ data }) {
  const [search, setSearch] = useState("");
  const [card, setCards] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    if (search === "") {
      setCards(data);
    } else {
      let searchResults = data.filter(
        (item) =>
          item.name.toLowerCase().includes(search.toLowerCase()) ||
          item.universe.toLowerCase().includes(search.toLowerCase())
      );
      setCards(searchResults);
    }
  }, [search, data]);

  // Función que maneja el boton search y setea el valor de search
  const searchHandler = (value) => {
    setSearch(value);
  };

  return (
    <>
      <Banner/>
      <div className="searchBox">
        <input
          type="text"
          value={search}
          placeholder="Busca por nombre o universo"
          className="searchInput"
          onChange={(e) => searchHandler(e.target.value)}
        />
      </div>
      <div className="cardContainer">
        {card.map((item) => (
          <div className="card" key={item.id}>
            <p className="cardName">{item.name}</p>
            <p className="cardUniverse">Universo: {item.universe}</p>
            <div className="cardImgContainer">
              <img className="cardImg" src={item.imageUrl} alt={item.name} />
            </div>
            <button
              className="button"
              onClick={() => {
                navigate(`details/${item.name}`);
              }}
            >
              Detalles
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default Cards;
