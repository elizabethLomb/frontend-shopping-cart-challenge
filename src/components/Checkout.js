import React, { Component } from 'react';

class Checkout extends Component  {
  constructor(props) {
    super(props)

    this.state = {
      itemsPrice: 0
    }
  }

  render() {
    //console.log(this.props)
    return (
      <aside className="summary">
        <h1 className="main">Order Summary</h1>

        <ul className="summary-items wrapper border">
          <li>
            <span className="summary-items-number">number Items</span>
            <span className="summary-items-price">{this.state.itemsPrice}<span className="currency">€</span></span>
            
          </li>
        </ul>


      </aside>
    )
  }
}

export default Checkout;
