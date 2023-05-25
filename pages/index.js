import React, { useState, useEffect } from 'react'
import { getProducts } from '../utils/PrestashopApiRequest';
// import PrestashopApi from '../utils/PrestashopApi';

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const products = await getProducts();
        setProducts(products);
        console.log(products);
      } catch (error) {
        console.error('Erreur lors de la récupération des produits :', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
    <h1>Liste des produits</h1>
    {/* {products.length > 0 ? ( */}
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h2>{product.name}</h2>
            <p>Prix: {product.price}</p>
            <p>Description: {product.description}</p>
            {/* Afficher d'autres informations sur le produit si nécessaire */}
          </li>
        ))}
      </ul>
    {/* ) : ( */}
      {/* <p>Aucun produit trouvé.</p>
    )} */}
  </div>
);
};
