Products Plan

### Feature
Product

### Url
`https://www.saucedemo.com/inventory.html` 

### Test Scope
> Kinda like just looking at everything that is part of the products page and everything that can be done
- Validate Items are shown
- Validate Clicking on item show it's details
- Validate Sorting (A-Z, Z-A, Low-High, High-Low)
- Validate Cart (Add & Remove)
- Hamburger Menu Navigation and Functionality
- Ensure no Login can't be here.
- Ensure Cart icon updates correctly

### Assumptions 
- Items are always going to be the same.
- User is already logged into valid user.

### Test Inputs
- Items already on the list (6 items)

### Test Cases
- Look at Items after logging in
- Click on Hamburger Menu
    - Click on About
    - Click on All items
    - Click on logout
- Click on Add Item
    - Check cart icon
- Click on Remove Item
    - Check cart icon
- Click on all 4 Sorts:
    - A-Z
    - Z-A
    - Low-High
    - High-Low
- Click on Item
> This can be checked with if the `Return to Products` appear or something else if found.

### Expected Behaviors 
- Logout should log out and redirect to `https://www.saucedemo.com` 
- About should redirect to `https://saucelabs.com/`
- Add and remove items should update the cart and button should change.
- Sorting should be different everytime a new sort is clicked, but same if same. It should also be sorted correctly (left to right, top to bottom)
- Clicking on item should only display clicked on item.

### Out of Scopes
- Accessibility of UI.
- Rate and speed of responses (Since it is just a frontend)

