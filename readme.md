How we can improve tests:
1. export data to separate files: 
    a) selectors to selectors file
    b) secrets to secrets file
2. check if price total is correct
3. check if tax amount is correct
4. check adding to cart from product page
5. remove item from inventory (home page)
6. check if checkout button is active when cart is empty (it is right now, we can "buy nothing")
7. check input fields on 'Checkout: Your Information' - first name, last name, zip code. Check error message when fields are empty, check if space is trimmed, check if some characters are not allowed
8. check sorting on home page
9. check clicking on 'cancel' button on 'Checkout: Overview' page

How can we execute tests: commad 'npx cypress open'