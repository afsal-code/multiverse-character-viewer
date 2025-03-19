import React, { useEffect, useState } from 'react';
import './Fetch.scss';
import { Link } from 'react-router-dom';

const FetchData = () => {
  const [posts, setPosts] = useState([]);

  const dataFetch = async () => {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    const value1 = await response.json();
    setPosts(value1.results);
    console.log(value1.results);
  };

  useEffect(() => {
    dataFetch();
  }, []);

  return (
    <div className='main-box'>
      {posts.map((info) => (
        <div className='card' key={info.id}>
            <Link to={`/detail/${info.id}`}>
                            <img src={info.image} alt={info.name} />
                        </Link>
          
           <h2>{info.name}</h2>
          <p  >status:{info.status}</p>
          <p>{info.species}</p>
        </div>
      ))}
    </div>
  );
};

export default FetchData;
