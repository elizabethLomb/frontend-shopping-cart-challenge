**NOTES**
- Library used React.js
- The App is working the only missing are the display of the fuctions for the Checkput class but they are all implemented
- The App.js it's my main component, the one that control all the data or most of it
- All functions and data handling are done separately for better understanding and in case it is necessary to be able to add more future features, just call what each function returns
- Only the use of two components was implemented, the use of a larger number was not considered necessary.
- There are comments in the code for greater understanding in each function
- App.js is the main component that receives and manipulates the data we send by our Productorow child component which renders each row of each product, is a simple loop which allows us to add infinite quantities of product without touching the main functions of our App
- The Checkout component is the one in charge of getting the total of the cart state, check if any promotions apply and gets the total cost 
with or without discounts
- No new features added

**Take into account the following aspects:**
- Have notes attached, explaining the solution and why certain things are included and others are left out.
- Deliver production ready code.
- Provide a solution that could be easy to grow and easy to add new functionality.
- You can add any UX / UI improvements you consider, but we are going to focus on the requested features.
We value succinctness.
- When in doubt, act as a product owner
- [BONUS]: our UI engineer hadn't time either to work on the product details modal which you can see in the `/bonus` folder. It would be a plus if you could implement it.
