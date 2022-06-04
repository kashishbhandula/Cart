import React from "react";
class CartItem extends React.Component {
    constructor() {
        super();
        this.state = {
            price: 999,
            title: 'Phone',
            qty: 1,
            img: ''

        }
        //this.increaseQuantity=this.increaseQuantity.bind(this);
    }
    increaseQuantity=()=>{
        console.log(this.state);
    }// arrow fn bind the value automatically
    render() {
        const { price, title, qty } = this.state;
        return (
            <div className="cart-item" >
                <div className="left-block">
                    <img style={styles.image} />
                </div>
                <div className="right-block">
                    <div style={{ fontSize: 25 }}>{title}</div>
                    <div style={{ color: '#777' }}>{price}</div>
                    <div style={{ fontSize: 25 }}>Qty: {qty}</div>
                    <div className="cart-item-actions">
                        <img
                            alt="increase"
                            className="action-icons"
                            src="https://cdn-icons-png.flaticon.com/512/992/992651.png" 
                           // onClick={this.increaseQuantity.bind(this)}// bind the functions so that reference is not lost
                           onClick={this.increaseQuantity}
                        />
                            
                        <img
                            alt="decrease"
                            className="action-icons"
                            src="https://cdn-icons-png.flaticon.com/512/992/992683.png" 
                        />
                        <img
                            alt="delete"
                            className="action-icons"
                            src="https://cdn-icons.flaticon.com/png/512/3569/premium/3569930.png?token=exp=1654332369~hmac=e9b1990224f84a171b943442e92b0012" 
                        />
                    </div>

                </div >

            </div >
        );

    }
}
const styles = {
    image: {
        height: 110,
        width: 110,
        borderRadius: 4,
        background: '#ccc'
    }
}
export default CartItem;

/*
flaticon for symbols
*/