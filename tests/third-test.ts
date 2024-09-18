fixture('Visit the home page of www.saucedemo.com')
    .page('https://www.saucedemo.com/');

test('Visit Home Page', async t => {
    await t 
    .typeText('#user-name', 'standard_user')
    .typeText('#password', 'secret_sauce')
    .click('#login-button')
})