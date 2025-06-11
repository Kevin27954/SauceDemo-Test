# Test Plan Summary

### Test plan components
So test plan basically just takes a **path**/**component**/**feature** of the application. These are usually not written per test but more for a group, almost a test suite if I'm correct. The core requirements that needs to be listed in one is:

- The Feature
What feature/path/component is it that we are testing. What part of the project is being tested? Is it the *Login* part, the *Checkout* part, the *Compiler* and it's *Results*, the *Search Results* and it's output, or the *Syntax Highlighting*? In general it's the feature we are looking at.

- The Url
The place we are testing it at. So if we are testing a login of a website then its: *http://website.com/login* and so on and so forth.

- The Test Scope
What are we testing. If it's login, then is the login flow correct with different credinatials? If it's compiler, does it compile depending on the input and formatting? If it's the Search results and sorting, are the items fetched the most up to date, correct order, and formatting (json)?

- Assumptions
Something that we assume beforehand to reduce the **complexity** and infer beforehand.

- Test Data
The inputs that we are going to use for the test. *Valid* and *invalid* inputs as well as edge cases.

- Test Cases
The test that we plan on doing and what we expect the result to be: failure or success. For example, *Checkout*:
    - clicking checkout with items (success)
    - clicking checkout without items (failure)
    - clicking checkout without logging in (failure)
    - clicking checkout with out of stock items (failure)
    - etc. (if i can of more)

- Expected Behaviors
What you would expect depending on your test cases. These are the core of the test cases and what you are trying to test. You can add sub expected behaviors but the core ones are the things you are trying to test. If they break, then the whole feature is considered broken. Examples for *Checkout* are:
    - Gettings to correct page
    - Displays correct amount
    - Shows error with invalid inputs
    - Shows not signed in when checkout without login

- Out of Scopes
This is what you are not testing or expecting for test for now. These are not exactly core features, such as **speed**, **responsiveness**, etc. I like to think of it as QOL things that are typically not really tested initially.


### Test Plan Template

| Sections   | Details    |
|--------------- | --------------- |
| Feature            | Item2.1   |
| Url                | Item2.2   |
| Test Scope         | Item2.3   |
| Assumptions        | Item2.4   |
| Test Inputs        | Item2.4   |
| Test Cases         | Item2.4   |
| Expected Behaviors | Item2.4   |
| Out of Scopes      | Item2.4   |


