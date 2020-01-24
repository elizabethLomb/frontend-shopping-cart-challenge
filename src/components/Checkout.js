import React from 'react';

const Checkout = ({ cart }) => {

  const sumByProducts = cart.reduce((acc, p) => p.quantity * p.price + acc, 0);

  const pricingRules = cart.map(product => {

    if(product.code.includes("CAP") && product.quantity % 2 === 0) {
      console.log("CAP", product.quantity)
      
      //product.price
    } else if (product.code.includes("TSHIRT") && product.quantity >= 3) {
      console.log("TSHIRT", product.quantity)

      //product.price = 19
    }
  })

  const total = sumByProducts

  // console.log('sumByProducts---->', sumByProducts)
  // console.log('pricingRules---->', pricingRules)


  return(
    <aside className="summary">
      <h1 className="main">Order Summary</h1>

      <ul className="summary-items wrapper border">
        <li>
          <span className="summary-items-number">{cart.length} Items</span>
          <span className="summary-items-price">{sumByProducts}<span className="currency">€</span></span>
        </li>
      </ul>

      <div className="summary-discounts wrapper-half border">
        <h2>Discounts</h2>
        <ul>
          {pricingRules}          
          <li><span>Promo code</span><span>0€</span></li>
        </ul>
      </div>

      <div className="summary-total wrapper">
        <ul>
          <li>
            <span className="summary-total-cost">Total cost</span>
            <span className="summary-total-price">{total}€</span>
          </li>
        </ul>
        <button type="submit">Checkout</button>
      </div>

    </aside>   
  )
}

export default Checkout;
