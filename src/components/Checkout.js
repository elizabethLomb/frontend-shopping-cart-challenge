import React from 'react';

const Checkout = ({ cart }) => {

  const sumByProducts = cart.reduce((acc, p) => p.quantity * p.price + acc, 0);

  const checkPromotions = cart.some(product => product.promotion === true)

  console.log(checkPromotions)

  // const pricingRules = cart.map(product => {
  //   //debugger
  //   if(product.promotion) return product.code
    

    
  // })

  const total = sumByProducts

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
