import React from 'react';

const Checkout = ({ cart }) => {

  const sumByProducts = cart.reduce((acc, p) => p.quantity * p.price + acc, 0);

  const capPromo = cart.some(product => product.code.includes("CAP") && product.quantity % 2 === 0)

  const shirtPromo = cart.some(product => product.code.includes("TSHIRT") && product.quantity >= 3)

  // console.log("capPromo", capPromo)
  // console.log("shirtPromo", shirtPromo)

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

  console.log('sumByProducts---->', sumByProducts)
  


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
          {/* {total}           */}
          <li><span>Promo code</span><span>0€</span></li>
        </ul>
      </div>

      <div className="summary-total wrapper">
        <ul>
          <li>
            <span className="summary-total-cost">Total cost</span>
            <span className="summary-total-price">{sumByProducts}€</span>
          </li>
        </ul>
        <button type="submit">Checkout</button>
      </div>

    </aside>   
  )
}

export default Checkout;
