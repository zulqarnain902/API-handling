import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async ()=>{

      const res = await axios.get('http://localhost:3000/api/products')
      const data = res.data
      setProducts(data )
    }
    fetchData()
  }, []);

  return (
    <div>
      <h1>Number of products are: {products.length}</h1>
      <ul>
        {products.map((product, index) => (
          <li key={index}>{product.name} - Rs.{product.price}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
