fixture('Visit Automation Test Store and try to login with an incorrect user')
    .page('https://automationteststore.com/');

// Tests
test('Login with an incorrect user', async t => {
    await t
        .click('#customer_menu_top')
        .typeText('#loginFrm_loginname', 'standard_user')
        .typeText('#loginFrm_password', 'secret_sauce')
        .click('button.btn:nth-child(7)')
        .expect('div.alert.alert-error.alert-danger').eql('div.alert.alert-error.alert-danger');
});

test('Login with a correct user', async t => {
    await t
        .click('#customer_menu_top')
        .typeText('#loginFrm_loginname', 'PepeRodriguez')
        .typeText('#loginFrm_password', 'SuperPassword')
        .click('button.btn:nth-child(7)')
        .expect('div.menu_text').eql('div.menu_text');
});

