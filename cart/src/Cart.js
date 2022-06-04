import { dblClick } from "@testing-library/user-event/dist/click";
import React from "react";
import CartItem from "./CartItem";
class Cart extends React.Component {
    constructor() {
        super();
        this.state = {
            products: [
                {
                    price: 999,
                    title: 'Phone',
                    qty: 1,
                    id: 1,
                    img: ''
                },
                {
                    price: 999,
                    title: 'Phone',
                    qty: 1,
                    id: 2.,
                    img: ''
                }, {
                    price: 999,
                    title: 'toy',
                    qty: 1,
                    id: 3,
                    img: ''
                }, {
                    price: 999,
                    title: 'wood',
                    qty: 1,
                    id: 4,
                    img: ''
                }
            ]


        }

        //this.increaseQuantity=this.increaseQuantity.bind(this);
        //this.testing();
    }
    handleIncreaseQuantity = (product) => {
        const { products } = this.state;
        const idx = products.indexOf(product);
        products[idx].qty += 1;
        this.setState({
            products: products
        })
    }
    handleDecreaseQuantity = (product) => {
        const { products } = this.state;
        const idx = products.indexOf(product);
        if(products[idx].qty>0)products[idx].qty -= 1;
        this.setState({
            products: products
        })
    }
    handleDelete = (product) => {
        const { products } = this.state;
        const idx = products.indexOf(product);
        products.splice(idx,1);
        this.setState({
            products: products
        })
    }
    render() {
        const { products } = this.state;
        return (

            <div className="cart">
                {products.map((product) => {
                    return (
                        <CartItem
                            product={product}
                            key={product.id}
                            onIncreaseQuantity={this.handleIncreaseQuantity}
                            onDecreaseQuantity={this.handleDecreaseQuantity}
                            onDelete={this.handleDelete}
                        />


                    );
                })}
            </div>





        )
    }
}
export default Cart;