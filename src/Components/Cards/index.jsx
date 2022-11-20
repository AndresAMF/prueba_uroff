import React, { useEffect, useState } from "react";
import './styles.css'

function Cards({ data }) {

  const [search, setSearch] = useState("");
  const [card, setCards] = useState([]);

  useEffect(() => {
    if (search === "") {
      setCards(data);
    } else {
      let searchResults = data.filter((item) =>
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
            <p className="cardUniverse">{item.universe}</p>
            <div className="cardImgContainer">
              <img className="cardImg" src={item.imageUrl} alt={item.name} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Cards;
