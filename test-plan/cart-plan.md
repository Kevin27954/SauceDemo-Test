Cart Plan

### Feature
Cart Page

### Url
`https://www.saucedemo.com/cart.html` 

### Test Scope
> Kinda like just looking at everything that is part of the products page and everything that can be done
- Validate the navigation works correctly
- Validate the remove button works
- Validate the item links work

### Assumptions 
- There are items on the page.
- User is already logged into valid user.

### Test Inputs
- Items pre-selected to be in the cart

### Test Cases
- Click back to shopping button.
- Click continue to checkout navigates to checkout.
- Click remove, removes the item from the cart.
- Click on item correctly navigates to the item page.

### Expected Behaviors 
- Back to Shopping should navigate to `inventory.html` page
- Back to Check out should navigate to `checkout-one.html` page
- Remove should remove the item from the list

- Side Quest:
    - refresh shuold keep the item in the kart
    - logging out should keep the item after logging back in

### Out of Scopes
> seems to be the same each time.
- Accessibility of UI.
- Rate and speed of responses (Since it is just a frontend)

