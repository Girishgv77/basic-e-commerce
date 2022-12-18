import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Home = ({handleProduct})=> {
    const [categories, setCategories] = useState([]);
    const [selected_category, set_Selected_category] = useState('');
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products/categories')
        .then((res)=>{
            setCategories(res.data);
        })
    },[])
    useEffect((event)=>{
        axios.get(`https://fakestoreapi.com/products/category/${selected_category}`)
        .then((res)=>{
            setProducts(res.data);
        })
    },[selected_category])
    return (
        <div>
            <h1>Home Page</h1>
            <Form.Select aria-label="Default select example" onChange={(e)=> set_Selected_category(e.target.value)}>
                <option>Select Product categories</option>
                {
                    categories.map((categorie,index)=>{
                        return <option key={index} value={categorie}>{categorie}</option>
                    })   
                }
            </Form.Select>
        <div>
        <h2>{selected_category}</h2>
     {
        products.length > 0 ?
          <Row xs={1} md={2} className="g-4">
          {products.map((product, index) => (
            <Col key={index}>
              <Card >
                <Card.Img variant="top" src={product.image} style={{ width: '15rem', height: '15rem'}}/>
                <Card.Body>
                  <Card.Title onClick={()=>{handleProduct(product) }}><Link to="/productsdetails">{product.title}</Link></Card.Title>
                </Card.Body>
                <Card.Footer>
                  <Card.Title>Price - {product.price}rs</Card.Title>
                  <small className="text-muted">Rated {product.rating.rate}/5 from {product.rating.count} people </small>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
        :''
     }
  </div>
  </div>
    );
}

export default Home;