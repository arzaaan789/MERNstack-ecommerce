import React,{useState,useEffect} from "react";
import {LinkContainer} from "react-router-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import Rating from "../components/Rating";
import axios from "axios";

import {useParams} from "react-router-dom";
import {Image} from "react-bootstrap";


export default function ProductScreen() {

    const {id} = useParams();

    const [product,setProduct] = useState({});
    useEffect(()=>{
        const fetchProduct=async ()=>{
            const {data}=await axios.get(`/api/products/${id}`);
            setProduct(data)
        }
        fetchProduct()
    },[])


    return (
        <>
            <Row>
                <Col md={2}>
                    <LinkContainer to="/">
                    <Button className='btn-block' type='button'>
                    Go Back
                    </Button>
                    </LinkContainer>
                </Col>
            </Row>

            <Row>
                <Col md={6}>
                    <Image src={product.image} alt={product.name} fluid/>
                </Col>
                <Col md={3}>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <h3>{product.name}</h3>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Rating value={product.rating}/>
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <span>{product.numReviews && `${product.numReviews} reviews`}</span>
                        </ListGroup.Item>


                        <ListGroup.Item>
                            Description: {product.description}
                        </ListGroup.Item>


                    </ListGroup>
                </Col>
                <Col md={3}>
                    <Card>
                        <ListGroup variant='flush'>
                            <ListGroup.Item>
                                <Row>
                                    <Col>Price:</Col>
                                    <Col><strong>${product.price}</strong></Col>

                                </Row>
                            </ListGroup.Item>

                            <ListGroup.Item>
                            <Row>
                                <Col>Status:</Col>
                                <Col>{product.countInStock > 0 ? 'In stock' : 'Out of Stock'}</Col>

                            </Row>
                        </ListGroup.Item>

                            <ListGroup.Item>
                                <Button className='btn-block' type='button' disabled={product.countInStock===0}>
                                    Add to cart
                                </Button>
                            </ListGroup.Item>

                        </ListGroup>
                    </Card>
                </Col>
            </Row>

        </>
    );
}