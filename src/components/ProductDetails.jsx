import React,{useState} from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


const ProductsDetails = ({productDetails, handleCart})=> {
  const [isProductAddedToCart, setIsProductAddedToCart] = useState(false);
  const handleOnclick = (product)=> {
    handleCart(product);
    setIsProductAddedToCart(true);
  }
    return (
        <div>
     {
         productDetails.map((product,index)=>{
          return (
            <div key={product.id}>
            <Card >
            <Card.Img variant="top" src={product.image} style={{ width: '15rem', height: '15rem'}}/>
            <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>{product.description}</Card.Text>
            </Card.Body>
            <Card.Footer>
            <Card.Title>Price - {product.price}rs</Card.Title>
        <small className="text-muted">Rated {product.rating.rate}/5 from {product.rating.count} people </small>
        <Button variant="primary" onClick={()=> handleOnclick(product)} disabled={isProductAddedToCart}>Add To Cart</Button>
      </Card.Footer>
          </Card>
          <div className="vr" />
          </div>
          )
        })
     }
  </div>
    );
}

export default ProductsDetails;