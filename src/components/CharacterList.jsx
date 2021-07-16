import React, { useState, useEffect, useCallback } from "react";
import Characters from "./Characters";
import Filter from "./Filter";
import axios from "axios";
import { Link } from "react-router-dom";

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);
  const [searchPhrase, setSearchPhrase] = useState("");
  const [page, setPage] = useState(1);

  const refresh = useCallback(() => {
    axios
      //.get(`https://rickandmortyapi.com/api/character?page=${page}`)

      .get(`https://rickandmortyapi.com/api/character`, {
        params: {
          page,
        },
      })

      .then((res) => {
        setCharacters(res.data.results);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [page]);

  useEffect(() => {
    refresh();
  }, [refresh]);

  // handleValue = (searchVal) => {
  //   setCharacters(searchVal);
  // };

  const handleSearchValue = (value) => {
    console.log(value);
    // var val = this.searchbar.value;
    // this.props.onHandleValues(val);
    setSearchPhrase(value.toLowerCase());
    // setCharacters(characters.filter((v) => v.name.includes(value)));
  };

  return (
    //<div className="grid gap-15 grid-cols-3 justify-items-center grid-flow-rows">
    <div className="flex flex-col items-center">
      <Filter onValueChange={handleSearchValue} />
      <div className="flex flex-wrap flex-grow place-content-evenly">
        {characters &&
          characters
            .filter((value) => value.name.toLowerCase().includes(searchPhrase))
            .map((character) => (
              <Link to={`/characters/${character.id}`} key={character.id}>
                <Characters
                  id={character.id}
                  name={character.name}
                  image={character.image}
                  status={character.status}
                ></Characters>
              </Link>
            ))}
      </div>
      <div className="flex flex-row text-white font-mono m4 place-content-center">
        <button
          className="mr-32"
          onClick={(e) => {
            // console.log(e, "Previous");
            if (page > 1) {
              setPage((old) => old - 1);
            }
          }}
        >
          Previous
        </button>
         Page: {page}
        <button
          className="ml-32"
          onClick={() => {
            if (page < 34) {
              setPage((old) => old + 1);
            }
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};
export default CharacterList;
