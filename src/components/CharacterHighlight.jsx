import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

const CharacterHighlight = () => {
  const params = useParams();

  const [character, setCharacters] = useState([]);
  //const [all, setAll] = useState([]);

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/${params.id}`)
      .then((res) => {
        setCharacters(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [params.id]);
  console.log(params.id);
  console.log(character);

  return (
    <div className="flex flex-col items-center">
      <div className="text-white font-mono m-4 text-2xl ml-8">
        <Link to="/characters">Back</Link>
      </div>
      <div className="flex flex-col bg-gray-600 m-6 rounded-x1 overflow-hidden shadow-xl items-center w-3/5">
        <div className="p-4 text-center text-white">{character.name}</div>
        <img alt="BENIZ" src={character.image} className="w-3/4"></img>
        <div className="p-4 text-center text-gray-400">
          Status: {character.status}
          <br></br>
          <span className="text-white">
            {character.species} - {character.location?.name}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CharacterHighlight;
