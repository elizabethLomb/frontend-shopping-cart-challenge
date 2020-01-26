import React, { Component } from 'react';

class Checkout extends Component {
  constructor(props) {
    super(props)

    this.state = {
      capPromo : false,
      shirtPromo: false,
      totalCost: 0 //discount included
    }
  }

  sumByProducts = () => {
    let sum = this.props.cart.reduce((acc, p) => p.quantity * p.price + acc, 0);
    this.setState({
      totalCost: sum
    })
  }


  //total products no promo
  //const sumByProducts = cart.reduce((acc, p) => p.quantity * p.price + acc, 0);

  //check for CAP promo
  //let capPromo = cart.some(product => product.code.includes("CAP") && product.quantity % 2 === 0)

  //check for SHIRT promo
  //let shirtPromo = cart.some(product => product.code.includes("TSHIRT") && product.quantity >= 3)


  // const total = cart.some(product => {
  //   if(product.code.includes("CAP") && product.quantity % 2 === 0) {
  //     console.log("CAP", product.quantity)
  //     return sumByProducts - 5
  //   } else if (product.code.includes("TSHIRT") && product.quantity >= 3) {
  //     console.log("TSHIRT", product.quantity)
  //     return sumByProducts - 3
  //   }
  // })

  //Object.values(total).forEach(t => t != null ? t - sumByProducts : t = 0)
  //const total = sumByProducts

  // const totalProducts = () => {
  //   if(capPromo) {
  //     capPromo = false
  //     return sumByProducts - 5
  //   } else if (shirtPromo) {
  //     return sumByProducts - 3
  //   } else {
  //     return sumByProducts
  //   }    
  // }
  

  render() {
    console.log(this.props)
    const { cart } = this.props.cart.length
    return(
      <aside className="summary">
        <h1 className="main">Order Summary</h1>

        <ul className="summary-items wrapper border">
          <li>
            <span className="summary-items-number">{cart} Items</span>
            <span className="summary-items-price">{this.sumByProducts}<span className="currency">€</span></span>
          </li>
        </ul>

        <div className="summary-discounts wrapper-half border">
          <h2>Discounts</h2>
          <ul>
            {/* {total}           */}
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
