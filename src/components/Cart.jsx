import React, {useState, useEffect} from "react";
import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';


const Cart = ({cartDetails, clearCart})=> {
  console.log(cartDetails)
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(()=>{
    setTotalPrice(cartDetails.reduce((sum, product) => sum + product.price, 0))
},[cartDetails.length])
    return (
        <div>
    <h2>Cart</h2>
    <Stack direction="horizontal" gap={3}>
      <div className="bg ms-auto">
      <Button  variant="secondary" onClick={()=> clearCart([])} >
      Clear Cart
      </Button>
      <div className="vr" />
      <Button  variant="secondary">
      Total Price - {totalPrice}
      </Button>
      </div>
      <div className="vr" />
      <div className="bg"><Button  variant="primary" onClick={()=>alert("Checkout Page Is Not Implemented")} >
      Checkout
      </Button></div>
    </Stack>
    {
      cartDetails.map((product,index)=>{
        return (
          <div key={product.id}>
          <Card >
          <Card.Img variant="top" src={product.image} style={{ width: '15rem', height: '15rem'}}/>
          <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          </Card.Body>
          <Card.Footer>
          <Card.Title>Price - {product.price}rs</Card.Title>
      <small className="text-muted">Rated {product.rating.rate}/5 from {product.rating.count} people </small>
    </Card.Footer>
        </Card>
        <div className="vr" />
        </div>
        )
      })
    }
    <div className="vr" />
  </div>
    );
}

export default Cart;