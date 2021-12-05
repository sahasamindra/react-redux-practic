import React from "react";
import { useParams } from "react-router";
import { useCharacter } from "./Hooks/useCharacter";
import "./Character.css";

export default function Character() {
  const { id } = useParams();
  const { data, loading, error } = useCharacter(id);
  if (error) return <div>Something went wrong</div>;
  if (loading) return <div>Loading data please wait...</div>;

  return (
    <div className="character">
      <img
        src={data.character.image}
        alt={data.character.name}
        width={500}
        height={500}
      />
      <div className="character-content">
        <h2>{data.character.name}</h2>
        <p>{data.character.gender}</p>
        <div className="character-episode">
          {data.character.episode.map((ep) => {
            return (
              <div key={Math.random()}>
                {ep.name} - <b>{ep.episode}</b>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
