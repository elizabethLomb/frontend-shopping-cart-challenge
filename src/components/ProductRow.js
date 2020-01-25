import React, { Component } from 'react';

class ProductRow extends Component  {
  constructor(props) {
    super(props)

    this.state = {
      count: 0,
      totalByProduct: 0 //total col need qyt
    }
  }

  onChangeCount = (event) => {
    this.setState({ count: event.target.value })
  } 

  existingProduct = () => {
    this.props.existingProduct({
      ...this.props.product
    })
  }


  addToCart = () => {
    this.props.addToCart({
      ...this.props.product,
      quantity: this.state.count + 1
    })
    this.setState(prevState => ({ count: prevState.count + 1 }))
    this.existingProduct()
    this.sumByProducts()

    //console.log('addToCart count -->',this.state.count)
  }

  removeFromCart = () => {
    this.props.removeFromCart({
      ...this.props.product,
      count: -1,
      quantity: this.state.count -1
    })
    this.setState(prevState => ({ 
      //can be less than 0
      count: prevState.count !== 0 ? prevState.count - 1 : prevState.count
    }))
  }

  sumByProducts = () => {
    let sum = this.props.cart.reduce((acc, p) => p.quantity * p.price + acc, 0);
    this.props.existingProduct 
    ? this.setState({totalByProduct: sum }) 
    : this.setState({totalByProduct: sum })
  }


  render() {
    const {image, name, code, id, price } = this.props.product
    return (
      <li className="product row">
        <div className="col-product">
          <figure className="product-image">
            <img src={image} alt={name} />
            <div className="product-description">
              <h1>{code}</h1>
              <p className="product-code">Product code {id}</p>
            </div>
          </figure>
        </div>

        <div className="col-quantity">
          <button className="count" onClick={this.removeFromCart}>-</button>
            <input
              type="number"
              className="product-quantity"
              value={this.state.count}
              onChange={this.onChangeCount}
            />
          <button className="count" onClick={this.addToCart}>+</button>
        </div>

        <div className="col-price">
          <span className="product-price">{price}</span>
          <span className="product-currency currency">€</span>
        </div>  

        <div className="col-total">
          <span className="product-price">{this.state.count * price}</span>
          <span className="product-currency currency">€</span>
        </div>

      </li>
    )
  }
}

export default ProductRow;