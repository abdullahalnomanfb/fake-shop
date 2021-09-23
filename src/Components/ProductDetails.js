import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const ProductDetails = (props) => {
  const {id, image, title, price, category } = props.product;
  return (
    <div className="col-md-4 col-lg-3 my-5">
      <Card style={{height:"450px"}}>
        <div className="text-center" style={{height:'220px'}}>
          <Card.Img style={{height:'100%',padding:'10px'}} variant="top" src={image} />
        </div>
        <Card.Body style={{height:'200px',backgroundColor:'#deced6'}}>
          <Card.Title>{title.slice(0,65)}</Card.Title>
          <Card.Text>$ {price}</Card.Text>
          <p className="text-secondary">{category}</p>
        </Card.Body>
        <Button as={Link} to={`/product/${id}`} variant="primary">Buy Now</Button>
    
      </Card>
    </div>
  );
};

export default ProductDetails;
