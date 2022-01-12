import React from "react";
import { Row } from 'react-bootstrap'
import Products from "../component/Products/Products";

import products from '../products'

const Home = () => {
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