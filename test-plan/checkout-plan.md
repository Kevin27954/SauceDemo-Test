Checkout step one Plan

### Feature
Checkout

### Url
`https://www.saucedemo.com/checkout-step-one.html` 

### Test Scope
Validate the checkout flow for step 1.

### Assumptions 
The user is logged in.

### Test Inputs
- Random form inputs
> You don't see the items right in this page, so no items are expect.

### Test Cases
- Fill fields with blank inputs for First Name, Last Name, and Zip Code
- Fill fields with valid inputs for First Name, Last Name, and Zip Code
- Clicking on Continue 
- Clicking on Cancel

### Expected Behaviors 
- Any inputs will result in valid inputs
- Blank inputs will result in invalid inputs
- Clicking Contiue will proceed to next step in checkout
- Clicking on cancel will result in Cart page.

### Out of Scopes
- How the UI response to this 
- Rate and speed of responses

