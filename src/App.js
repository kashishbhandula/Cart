import logo from './logo.svg';
import './App.css';
import Cart from './Cart';
import Navbar from './Navbar';
import React from 'react';
import Email from './Email';
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [
        // {
        //   price: 999,
        //   title: 'Phone',
        //   qty: 1,
        //   id: 1,
        //   img: ''
        // },
        // {
        //   price: 999,
        //   title: 'Phone',
        //   qty: 1,
        //   id: 2.,
        //   img: ''
        // }, {
        //   price: 999,
        //   title: 'toy',
        //   qty: 1,
        //   id: 3,
        //   img: ''
        // }, {
        //   price: 999,
        //   title: 'wood',
        //   qty: 1,
        //   id: 4,
        //   img: ''
        // }
      ]


    }
    this.db = firebase.firestore();
    //this.increaseQuantity=this.increaseQuantity.bind(this);
    //this.testing();
  }
  componentDidMount() {
    console.log("Component Mounted");//when page loaded
    //constructor->render->CDM
    this.db//snapshot
      .collection('products')
      //.where('price','==',900)//query
      //.orderBy('price,asc)
      .get()
      .then((snapshot) => {
        //console.log(snapshot);
        const product = snapshot.docs.map((doc) => {
          //console.log(doc.data());
          const data = doc.data();
          data['id'] = doc.id;
          return data;

        });
        console.log(product);
        this.setState({
          products: product

        })
      });
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("Component Updated");// whenver rerender->CDU

  }
  componentWillUnmount() {
    console.log("CleanUp");//mounted->unmounted
    //cleanup

  }
  addProduct = () => {
    this.db
      .collection('products')
      .add({
        img: '',
        price: 900,
        qty: 3,
        title: 'washing machine'
      }).then((docRef) => {
        console.log('Product has been added', docRef);

      })
      .catch((err) => {
        console.log('Error:', err);
      })
      let myPromise = new Promise(function (myResolve, myReject) {
      });
      myPromise.then(
        
        this.componentDidMount()
        //
      );
  }
  handleIncreaseQuantity = (product) => {
    const { products } = this.state;
    const idx = products.indexOf(product);
    // products[idx].qty += 1;
    // this.setState({
    //   products: products
    // })
    const docRef = this.db.collection('products').doc(products[idx].id);
    docRef.update({
      qty: products[idx].qty + 1
    }).then(() => {
      console.log('update Successfully');
    })
      .catch((err) => {
        console.log("err", err);
      })
    let myPromise = new Promise(function (myResolve, myReject) {
    });
    myPromise.then(
      this.setState({
        products: products
      }),
      this.componentDidMount()
      //
    );
    
  }
  handleDecreaseQuantity = (product) => {
    const { products } = this.state;
    const idx = products.indexOf(product);
    // if (products[idx].qty > 0) products[idx].qty -= 1;
    // this.setState({
    //   products: products
    // })
    if (products[idx].qty > 0) {
      const docRef = this.db.collection('products').doc(products[idx].id);
      docRef.update({
        qty: products[idx].qty - 1
      }).then(() => {
        console.log('update Successfully');
      })
        .catch((err) => {
          console.log("err", err);
        })
    }
    let myPromise = new Promise(function (myResolve, myReject) {
    });
    myPromise.then(
      this.setState({
        products: products
      }),
      this.componentDidMount()
      //
    );

  }
  handleDelete = (product) => {
    const { products } = this.state;
    const idx = products.indexOf(product);
    // products.splice(idx, 1);
    // this.setState({
    //   products: products
    // })
    const docRef = this.db.collection('products').doc(products[idx].id);
    docRef.delete()
      .then(() => {
        console.log('Deleted Successfully');
      })
      .catch((err) => {
        console.log("err", err);
      })
      let myPromise = new Promise(function (myResolve, myReject) {
      });
      myPromise.then(
        this.setState({
          products: products
        }),
        this.componentDidMount()
        //
      );

  }
  getCartCount() {
    const { products } = this.state;
    let count = 0;
    products.forEach(product => {
      count += product.qty;

    });
    return count;
  }
  getCartTotal() {
    const { products } = this.state;
    let total = 0;
    products.forEach(product => {
      total += (product.price * product.qty);

    });
    return total;
  }
  render() {
    const { products } = this.state;
    return (

      <div className="App" >
        <Navbar
          count={this.getCartCount()}
        />
        <button onClick={this.addProduct} style={{ padding: 20, fontSize: 20 }} />
        <Cart
          products={products}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDelete={this.handleDelete}
        />
        <div style={{ padding: 10, fontSize: 20 }}>Total: {this.getCartTotal()}</div>
        <Email></Email>

      </div>
    )

  }


}

export default App;
