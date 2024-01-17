import { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useDispatch,useSelector} from "react-redux";
import { add } from "../store/cartSlice";
import  {getProducts}  from "../store/productSlice";
import Statuscode from "../store/utils/statusCode";
import Alert from 'react-bootstrap/Alert';


const Product = () => {
    const dispatch = useDispatch();
    const {data : products,status} = useSelector(state => state.products);


    useEffect(() => {
     dispatch(getProducts());
    }, []);

    if(status === Statuscode.Loading){
        return<p>Loading...</p>
    }

    if(status === Statuscode.Error){
        return<Alert key="danger" variant="danger">Something went wrong!!!Please try again later</Alert>
    }

    const addToCart = (product) => {
        //dispatch an add action
        dispatch(add(product))
    }
 

    const cards = products.map(product => (
        <div className="col-md-3" style={{ marginBottom: '10px' }}>
            <Card key={product.id} className="h-100">
                <div className="text-center">
                    <Card.Img variant="top" src={product.image} style={{ width: '100px', height: '130px' }} />
                </div>
                <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>
                        AUD ${product.price}
                    </Card.Text>
                </Card.Body>

                <Card.Footer style={{ backgroundColor: 'white' }}>
                    <Button variant="dark" onClick={() => addToCart(product)} >ADD TO CART</Button>
                </Card.Footer>

            </Card>

        </div>
    ))
    return (
        <>
            <h1>Product Dashboard</h1>
            <div className="row">
                {cards}
            </div>
        </>
    )
}

export default Product;