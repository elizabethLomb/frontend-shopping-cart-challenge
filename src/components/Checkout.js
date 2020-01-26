import React, { Component } from 'react';

class Checkout extends Component {
  constructor(props) {
    super(props)

    this.state = {
      capPromo : false,
      shirtPromo: false,
      total: 0,
      totalCost: 0 //discount included
    }
  }

  sumByProducts = () => {
    let sum = this.props.cart.reduce((acc, p) => p.quantity * p.price + acc, 0)
    this.props.cart.length !== 0 ?
      this.setState({
        total: sum,
        totalCost: this.state.total      })
    : this.setState({ total: 0 })
  }

  checkCapPromo = () => {
    this.props.cart.some(product => product.code.includes("TSHIRT") && product.quantity >= 3) 
    ? this.setState({ capPromo: true, totalCost: this.state.totalCost - 5 })
    : this.setState({ capPromo: false})
  }

  checkShirtPromo = () => {
    this.props.cart.some(product => product.code.includes("TSHIRT") && product.quantity >= 3)
    ? this.setState({ capPromo: true, totalCost: this.state.totalCost - 3})
    : this.setState({ capPromo: false})
  }
  
  renderList = () => {
    if(this.state.capPromo){
      return (
        <li><span>2x1 Cap offer</span><span>-10€</span></li>
      )
    } else if(this.state.shirtPromo){
      return (
        <li><span>x3 Shirt offer</span><span>-3€</span></li>
      )
    } 
  }

  render() {
    return(
      <aside className="summary">
        <h1 className="main">Order Summary</h1>

        <ul className="summary-items wrapper border">
          <li>
            <span className="summary-items-number">{this.props.cart.length} Items</span>
            <span className="summary-items-price">{this.state.total}<span className="currency">€</span></span>
          </li>
        </ul>

        <div className="summary-discounts wrapper-half border">
          <h2>Discounts</h2>
          <ul>
            {this.renderList}
            <li><span>Promo code</span><span>0€</span></li>
          </ul>
        </div>

        <div className="summary-total wrapper">
          <ul>
            <li>
              <span className="summary-total-cost">Total cost</span>
              <span className="summary-total-price">{this.state.totalCost}€</span>
            </li>
          </ul>
          <button type="submit">Checkout</button>
        </div>

      </aside>   
    )
  }
}

export default Checkout;
