import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Api() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/swagger#/')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      {data.map(item => (
        <div key={item.id}>
          <h3>{item.nome}</h3>
          <h3>{item.evento}</h3>
        </div>
      ))}
    </div>
  );
}

export default Api;
