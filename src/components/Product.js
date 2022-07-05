import React from "react";
import Card from "react-bootstrap/Card";
import Rating from "./Rating";
import {Link} from "react-router-dom";

export default function Product({product}) {
    return(
        <Card className='my-3 p-3 rounded productcard'>
            <Link to={`/product/${product._id}`}>
                <Card.Img variant="top" src={product.image} />
            </Link>

            <Card.Body>
                <Link to={`/product/${product._id}`}>
                <Card.Title as='div'><strong>{product.name}</strong></Card.Title>
                </Link>


                <Card.Text as='div'>
                    <Rating value={product.rating} text={`${product.numReviews} reviews`}/>
                </Card.Text>

                <Card.Text as='div'>
                    <span>{product.numReviews && `${product.numReviews} reviews`}</span>
                </Card.Text>



                <Card.Text as='h3'>${product.price}</Card.Text>

            </Card.Body>

        </Card>
    )
}