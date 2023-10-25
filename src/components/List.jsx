import React, { useState, useEffect } from 'react';
import Character from './Character';

export default function List() {
    const [loading, setLoading]= useState(true)

    const [characters, setCharacters]= useState([]);

    useEffect( ()=> {
      async function fetchData() {
        const data= await fetch('https://rickandmortyapi.com/api/character');

        const { results }= await data.json();

          setCharacters(results);
          setLoading(false);
      }
      fetchData();

    }, [characters.length]);
  return (
    <div className="row">


            {loading ? (<div>Loading...</div>) : (
              characters.map( (character)=> (
                <Character key={character.id} name={character.name} image={character.image} origin={character.origin} />
              ))
            )}
    </div>
  );
}
