import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Banner from '../Banner'
import "./styles.css";

function Details() {
  const [character, setCharacter] = useState([]);
  const characterName = useParams();
  let navigate = useNavigate();

  const getCharacterData = async (name) => {
    const data = await fetch(
      `https://dragon-ball-super-api.herokuapp.com/api/characters/${name}/`
    );
    const results = await data.json();
    setCharacter(results);
  };

  useEffect(() => {
    getCharacterData(characterName.name);
  }, [characterName]);

  return (
    <>
      <Banner/>
      <div className="mainContainer">
        <button className="buttonBack" onClick={() => {
          navigate(`/`)
        }}>Volver al inicio</button>
        <div className="detailsContainer">
          <div className="detailsImgContainer">
            <img className="detailsImg" src={character.imageUrl} alt={character.name} />
          </div>
          <div className="detailsContent">
            <h2 className="detailsName">{character.name}</h2>
            <h3 className="detailsUniverse">Universo: {character.universe}</h3>
            <h3 className="detailsSpecies">Especie: {character.specie}</h3>
            <h3 className="detailsRole">Rol: {character.role}</h3>
            <h3 className="detailsStatus">Estatus: {character.status}</h3>
            <h3 className="detailsTransformation">Transformación: {character.transform}</h3>
            <h3 className="detailsOrigin">Planeta de origen: {character.originplanet}</h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default Details;
