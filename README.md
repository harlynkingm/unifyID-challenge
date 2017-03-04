
# SOLUTION

  To solve this problem, I created an object that tracked the different
  required sites, knowing the selectors that would be used to identify
  the username and password fields, as well as the submit button.

  One problem I ran into was the idea that all of the sites except Facebook
  change pages before or during the form submission process.

  For PayPal, I set up a function to reroute the user to the login screen
  if they try to use the extension on another page.

  For Instagram, I set up a function to go to the 'Log in' part of the form,
  which is activated using JavaScript, if the user uses the extension on the
  'Sign up' part of the page.

  For Bank of America and Citibank, I created a separate set of selection tags for the alternate login page, treating it like a different website.

  For Yahoo, you have to submit the form twice if you want to login. The user
  can use the extension to hit login on each page if they wish, or navigate
  through the fields using the website.

  In Facebook's case, there is an alternate login page, but it uses the same fields as the initial one.

  I did not find myself needing to use the background storage in the end,
  although that was my initial direction upon reading the problem.

  I have tried all 6 sites across each of the three functions and everything
  seems to be working. Overall this is a very simple implementation of this
  solution and it could be optimized given more time and planning.





 * Trigger form submit with a pair of credentials.
 * Find the form elements in the dom.
 * Obtain the values from the login elements in the dom.

# Load The Extension

1. Go to 'chrome://extensions' in your chrome browser.
2. In the upper right corner check 'Developer mode'
3. In the menu that appeared select 'Load unpacked extension...'
4. Select this folder.

In order to reload your changes:
1. Go to 'chrome://extensions' in your chrome browser.
2. Click 'Update extensions now', 'Ctrl+r', or 'Cmd+r'.


# The Challenge

In this folder there is a file called challenge.js with three functions that you will need to override.
Currently challenge.js has sample code that shows a proof of concept for https://facebook.com

You can test the functions by clicking the UnifyID icon in the top right corner of Google Chrome and select the function
to test from the menu.

Here is what is expected when selecting each option from the menu:
 * Detect Fields: This will call your function `detectFormFields` and put a border around the elements.
 * Login: This will call your function `loginWithCredentials` with fake credentials.
 * Get Form Values: This will alert the result from your function `obtainFieldsValues`

You can change the credentials for testing the Log In in the file ./dist/credentials.json

# Optional

In case that you need to preserve a global state across several pages you can use the background script (background.js)
that is in this folder.
More about background scripts: https://developer.chrome.com/extensions/background_pages
More about communication with the background script: https://developer.chrome.com/extensions/nativeMessaging
