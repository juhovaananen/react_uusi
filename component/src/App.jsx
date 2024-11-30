import { useState } from 'react';
import './App.css';


function App() {
  return (
    <>
      <Header />
      <Product />
    </>
  );
}


function Header() {
  return (
    <div className="content">
      <h2>Welcome to product page</h2>
    </div>
  );
}


function Product() {
  const [counter, setCounter] = useState(1);
  const [selectedProduct, setSelectedProduct] = useState('iPhone');

  const products = [
    { name: 'iPhone 15', price: 749 },
    { name: 'RTX 1060', price: 120 },
    { name: 'Airpods gen. 4', price: 150 },
    { name: 'Razer huntsman', price: 200 },
    { name: 'Playstation 4', price: 320 },
  ];


  const currentProduct = products.find((p) => p.name === selectedProduct);
  const totalPrice = currentProduct ? currentProduct.price * counter : 0;


  const incrementCounter = () => setCounter(counter + 1);


  const decrementCounter = () => {
    if (counter > 1) setCounter(counter - 1);
  };


  const handleSelectChange = (event) => setSelectedProduct(event.target.value);

  return (
    <div>
      <h1>Select product</h1>

      <div className="valikko">
        <p>Product:</p>
        <select value={selectedProduct} onChange={handleSelectChange}>
          {products.map((product) => (
            <option key={product.name} value={product.name}>
              {product.name} ({product.price}€)
            </option>
          ))}
        </select>
      </div>

      <div className="Counterbtn">
        <p>Quantity:</p>
        <button onClick={decrementCounter}>-</button>
        <p>{counter}</p>
        <button onClick={incrementCounter}>+</button>
      </div>

      <OrderInfo
        product={selectedProduct}
        quantity={counter}
        totalPrice={totalPrice}
      />
    </div>
  );
}


function OrderInfo({ product, quantity, totalPrice }) {
  return (
    <div>
      <h2>Order Info</h2>
      <div className="grid-container">
        <div className="grid-item">Product</div>
        <div className="grid-item">Quantity</div>
        <div className="grid-item">Total</div>
        <div className="grid-item">{product}</div>
        <div className="grid-item">{quantity}</div>
        <div className="grid-item">{totalPrice}€</div>
      </div>
    </div>
  );
}

export default App;