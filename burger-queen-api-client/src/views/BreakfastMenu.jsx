import { useState, useEffect } from 'react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';

function BreakfastMenu() {
  const [products, setProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    // Simulación de obtener los productos de la API al cargar la página
    fetch('https://burger-queen-oxn0.onrender.com/products')
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.log('Error fetching products:', error));
  }, []);

  const handleAddProduct = (product) => {
    const existingProduct = products.find((p) => p.name === product.name);
    if (existingProduct) {
      setProducts((prevProducts) =>
        prevProducts.map((p) =>
          p.name === product.name ? { ...p, quantity: p.quantity + 1 } : p
        )
      );
    } else {
      setProducts((prevProducts) => [...prevProducts, { ...product, quantity: 1 }]);
    }

    setTotalPrice((prevPrice) => prevPrice + product.price);
  };

  const handleRemoveProduct = (product) => {
    const existingProduct = products.find((p) => p.name === product.name);
    if (existingProduct && existingProduct.quantity > 1) {
      setProducts((prevProducts) =>
        prevProducts.map((p) =>
          p.name === product.name ? { ...p, quantity: p.quantity - 1 } : p
        )
      );
      setTotalPrice((prevPrice) => prevPrice - product.price);
    } else {
      setProducts((prevProducts) =>
        prevProducts.filter((p) => p.name !== product.name)
      );
      setTotalPrice((prevPrice) => prevPrice - product.price);
    }
  };

  const handleClearProducts = () => {
    setProducts([]);
    setTotalPrice(0);
  };

  return (
    <>
      <Header />
      <div>
        <h1>Breakfast Menu</h1>
        <div>
          {products.map((product) => (
            <button key={product.id} onClick={() => handleAddProduct(product)}>
              {product.name} ${product.price}
            </button>
          ))}
        </div>
        <div>
          {products.map((product) => (
            <div key={product.id}>
              <span>({product.quantity}) {product.name} ${product.price * product.quantity}</span>
              <button onClick={() => handleRemoveProduct(product)}>Edit</button>
              <button onClick={() => handleRemoveProduct(product)}>Delete</button>
            </div>
          ))}
        </div>
        <div>
          <span>Total ${totalPrice}</span>
          <button onClick={handleClearProducts}>Clear All</button>
        </div>
        <div>
          <Link to="/lunch-and-dinner-menu">Ver más</Link>
          <Link to="/new-product">Añadir nuevo producto</Link>
        </div>
        <div>
          <Link to="/orders">Ver órdenes anteriores</Link>
          <Link to="/">Salir</Link>
        </div>
        <div>
          <Link to="/confirmation-window">Enviar pedido a la cocina</Link>
        </div>
      </div>
    </>
  );
}

export default BreakfastMenu;
