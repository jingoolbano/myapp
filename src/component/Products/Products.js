import React from "react";
import { Col, Card, Button } from "react-bootstrap";

import './Products.style.css'

const Products = ({ products }) => {
    return (
        <Col sm={12} md={6} lg={4} >
            <Card style={{ width: '18rem' }} className="my-2 py-2 rounded">
                <a href={`/products/${products._id}`} className="wrapper">
                    <Card.Img variant="top" src={products.image} className="hover" />
                </a>
                <Card.Body className="text-center">
                    <a href={`/products/${products._id}`}>
                        <Card.Title>{products.name}</Card.Title>
                    </a>
                    <Card.Text>
                        {products.description}
                    </Card.Text>
                    <Card.Text>{products.price}$</Card.Text>
                    <Button variant="dark">اضافه کردن به سبد خرید</Button>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default Products