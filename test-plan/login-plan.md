Login Plan

| Sections   | Details    |
|--------------- | --------------- |
| Feature            | Login  |
| Url                | `https://www.saucedemo.com`  |
| Test Scope         | Validate the login flow with valid and invalid credentials  |
| Assumptions        | Credentials are provided by env or randomly generated in secure location  |
| Test Inputs        | - Valid credentials like `standard_user` and `secret_demo` - Invalid credentials like random stuff and blank fields |
| Test Cases         | - Login with correct user and password
                       - Login with incorrect user and password
                       - Login with blank|
| Expected Behaviors | - Successful login redirects to the inventory like page
                       - Failed login displays errors |
| Out of Scopes      | - How the UI response to this
                       - Rate and speed of responses|


