class Checkout {
  constructor(pricingRules){

    this.products = products
    this.count = 0
    this.cart = []
  }

  addItem(clickItem) {   
    this.cart.push(clickItem)
    this.count += 1
    this.inputValue(clickItem)

    console.log(this.cart)
  }

  removeItem(clickItem) {
    this.count = this.count >= 0 ? this.count -= 1 : this.count = 0
    this.cart.pop(clickItem)
    this.inputValue(clickItem)

    console.log(this.cart.length)
  }

  inputValue(clickItem) {
    // quantity = document.getElementsByName('quantity').forEach(element => {
    //   element.offsetParent.id === clickItem ? element.value = this.count : null
    // });

    clickItem.childNodes[3].children[1].value = this.count
  }

  totalByItem() {

  }

  //get total of cart
  total() {

  }

  

}