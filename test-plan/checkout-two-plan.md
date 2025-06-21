Checkout step two Plan

### Feature
Checkout

### Url
`https://www.saucedemo.com/checkout-step-two.html` 

### Test Scope
Validate the checkout flow for step 2.

### Assumptions 
The user is logged in.

### Test Inputs
- Random items
- No items

### Test Cases
- Ensure the item price are listed correctly
- Ensure the sales tax are calcualted correctly
- Click on Cancel
- Click on Finish

### Expected Behaviors 
- Cancel redirects to products page.
- No items should have 0 dollars total
- The price should be 8% tax applied
- Items should be correct

### Out of Scopes
- How the UI response to this 
- Rate and speed of responses

