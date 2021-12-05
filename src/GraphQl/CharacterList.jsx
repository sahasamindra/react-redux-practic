import React from "react";
import { Link } from "react-router-dom";
import "./CharacterList.css";
import { useCharacters } from "./Hooks/useCharacters";

// import { useQuery, gql } from "@apollo/client";
// const GET_CHARACTERS = gql`
//   query {
//     characters {
//       results {
//         id
//         name
//         image
//       }
//     }
//   }
// `;

export default function CharacterList() {
  //   const { error, data, loading } = useQuery(GET_CHARACTERS);
  //   console.log(error, loading, data);

  const { error, loading, data } = useCharacters();

  if (error) return <div>Something went wrong</div>;
  if (loading) return <div>Loading data please wait...</div>;

  return (
    <div className="character-list">
      {data.characters.results.map((character) => {
        return (
          <div key={character.id}>
            <Link to={`${character.id}`}>
              <img src={character.image} alt={character.name} />
              <h2>{character.name}</h2>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
