import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Card, Image, Button } from 'react-bootstrap'
import axios from 'axios'


import './ProductPage.style.css'

const ProductPage = ({ match }) => {
    const [currentProduct, setproducts] = useState({})

    useEffect(() => {
        const sendSingleProductReq = async () => {
            const response = await axios.get(`http://localhost:8000/api/products/${match.params.id}`)

            setproducts(response.data)
        }

        sendSingleProductReq()
    }, [match])


    /*   const currentProduct = products.find((item) => {
          return item._id === match.params.id
      }) */

    return (
        <Container className='my-5'>
            <Row>
                <Col sm={12} md={6} lg={5}>
                    <Image src={currentProduct.image} fluid />
                </Col>

                <Col sm={12} md={3} lg={3} className='my-auto mx-auto' >
                    <Card>
                        <Card.Body>
                            <Card.Title>{currentProduct.name}</Card.Title>
                            <Card.Text>{currentProduct.description}</Card.Text>
                            <Card.Text>{currentProduct.price}$</Card.Text>
                        </Card.Body>
                        <Button className='btn-block btn-dark Mclass' type='button'>افزودن به سبد خرید</Button>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default ProductPage