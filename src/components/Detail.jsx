import React, { useEffect, useState } from 'react';
import './Fetch.scss'; // You can style detail separately too
import { useParams } from 'react-router-dom';
import './Detail.scss'
import { Link } from 'react-router-dom';

const Detail = () => {
  const [character, setCharacter] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const dataFetch = async () => {
      const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
      const data = await response.json();
      setCharacter(data);
    };

    dataFetch();
  }, [id]);

  if (!character) {
    return <p>Loading...</p>;
  }

  return (
    <>
    <div className='detail-container'>
      <div className='detail-card'>
        <img src={character.image} alt={character.name} className='detail-img' />
        <div className='detail-info'>
          <h2>{character.name}</h2>
          <p><strong>Status:</strong> {character.status}</p>
          <p><strong>Species:</strong> {character.species}</p>
          <p><strong>Gender:</strong> {character.gender}</p>
          <p><strong>Origin:</strong> {character.origin.name}</p>
          <p><strong>Location:</strong> {character.location.name}</p>
        </div>
     
      </div>
    
    </div>
      <div className="back-btn-container">
      <Link to="/">
        <button className="back-btn">← Back to Home</button>
      </Link>
    </div>
    </>
    
  );
};

export default Detail;
