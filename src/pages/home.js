import React, { useEffect, useState } from "react";
import { Row } from 'react-bootstrap'
import axios from "axios";

import Products from "../component/Products/Products";


const Home = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        const sendReq = async () => {
            const response = await axios.get('http://localhost:8000/api/products')

            setProducts(response.data)
        }

        sendReq()
    })


    return (
        <div>
            <h1 className="my-5 text-center">محصولات</h1>
            <Row>
                {products.map((item) => {
                    return (
                        <Products
                            products={item}
                            key={item._id}
                        />
                    )
                })}
            </Row>
        </div>
    )
}

export default Home