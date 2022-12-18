import React, {useState, useEffect} from 'react';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home';
import Cart from './components/Cart';
import ProductsDetails from './components/ProductDetails'
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import Badge from 'react-bootstrap/Badge';

function App() {
  const [cart, setCart] = useState([]);
  const [productDetails, setProductDetails] = useState([]);
  const handleCart = (product)=> {
    setCart((Cart) =>[...Cart, product])
  }
  const handleProduct = (product)=> {
    setProductDetails([product])
    console.log(product) 
  }
  useEffect(()=>{
},[cart])
  return (
    <div className="App">
      <div className="menu">
        <Stack direction="horizontal" gap={3}>
          <div className="bg">
            <Link to="/">
                <Button  variant="secondary">Home</Button>
            </Link>
          </div>
          <div className="bg ms-auto">
            <Link to="/cart">
                <Button  variant="secondary">Cart 
                  <Badge bg="secondary">{cart.length}</Badge>
                  <span className="visually-hidden">unread messages</span>
                </Button>
            </Link>
          </div>
          <div className="vr" />
            <div className="bg"><Button  variant="secondary">Profile</Button></div>
        </Stack>
      </div>
      <div className="App-intro">
        <Routes>
          <Route path="/" element={<Home  handleProduct={handleProduct} />}/>
          <Route path="/productsdetails" element={<ProductsDetails productDetails={productDetails} handleCart={handleCart}/>}/>
          <Route path="/cart" element={<Cart cartDetails={cart} clearCart={setCart} />}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
