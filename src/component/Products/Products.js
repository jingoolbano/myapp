import React from "react";
import { Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

import './Products.style.css'

const Products = ({ products }) => {
    return (
        <Col sm={12} md={6} lg={4} >
            <Card style={{ width: '18rem' }} className="my-2 py-2 rounded">
                <Link to={`/products/${products._id}`} className="wrapper">
                    <Card.Img variant="top" src={products.image} className="hover" />
                </Link>
                <Card.Body className="text-center">
                    <Link to={`/products/${products._id}`}>
                        <Card.Title>{products.name}</Card.Title>
                    </Link>
                    <Card.Text>{products.price}$</Card.Text>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default Products