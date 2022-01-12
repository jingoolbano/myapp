import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'

import Footer from './component/Footer/Footer'
import Header from './component/Header/Header'
import Home from './pages/home'
import ProductPage from './pages/ProductPage'

function App() {
    return (
        <Router>
            <Header />
            <main className='py-3'>
                <Container>
                    <Route path="/" component={Home} exact />
                    <Route path="/products/:id" component={ProductPage} />
                </Container>
            </main>
            <Footer />
        </Router>
    )
}

export default App
