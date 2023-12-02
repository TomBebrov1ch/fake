import { useState, useEffect } from "react"
import axios from 'axios'
import Card from "./component/Card";


const App = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState('');
  useEffect(() => {
    const fetchProducts = async() => {
      try {
        const response = await
        axios.get('https://fakestoreapi.com/products?limit=20')
        setProducts(response.data);
        console.log(response.data);
      } catch (error) {
        setError('Could not fetch products');
        console.error('There was an error!', error)
      }
    };
    fetchProducts();
  }, []);
  
  return (
    <div>
      {products.map(product => (
        <Card
        key={product.id}
        image={product.image}
        title={product.title}
        price={product.price}
        />
      )
      )}
    </div>
  )
}

export default App
