import { Selector } from 'testcafe';

fixture `My First Test in JRPay UI`
    .page('https://app-dev.jackrabbitpay.com/');

test('Login & Visit Home Page Test', async t => {
    // Interact with the login form
    await t
        .typeText('input#email', 'sebastiandario.rodriguez+15@endava.com')
        .typeText('input#password', 'endava1!')
        .click('button#next')
        .expect('.mt-1').ok()
        .expect('.mt-32').ok();
});

//test('Visit Client Page and Create a Class Balance Account Holder (Organization Type)', async t => {

//});

test('Visit Client Page and Make a Search', async t => {
    const dropdown = Selector('#searchForStatus');
    const option = dropdown.find('option');

    // Selector for the table row and the "ID" column
    //const tableRows = Selector('tbody tr');
    //const idColumn = tableRows.find('tr.bg-white:nth-child(1) > td:nth-child(2)');

    // Perform actions on the page
    await t
        .typeText('input#email', 'sebastiandario.rodriguez+15@endava.com')
        .typeText('input#password', 'endava1!')
        .click('button#next')
        .click('a.flex:nth-child(3) > div:nth-child(2)')
        .expect(Selector('.text-3xl').exists).ok()
        .typeText('#searchForAccountHolderCode', 'cypress')
        .click(dropdown)
        .click(option.withText('In Progress'))
        .click('button.cursor-pointer:nth-child(3)');

    //const rowCount = await tableRows.count; // Get the number of rows in the table

    // Loop through each row and verify if the ID column contains 'Cypress'
    //for (let i = 0; i < rowCount; i++) {
        //const idText = await idColumn.nth(i).innerText;
        //await t.expect(idText).contains('Cypress');
    //}
});
