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

test('Visit Client Page and Create a Class Balance Account Holder (Organization Type)', async t => {
    // Generate random numbers 
    const randomNumber = Math.floor(Math.random() * 10000);

    // Selector for the Edition Dropdown
    const editionDropdown = Selector('#edition');
    const editionOption = editionDropdown.find('option');

    //Selector for the Legal Entity Type Dropdown
    const legalDropdown = Selector('#legalEntityType');
    const legalOption = legalDropdown.find('option');

    //Selector for the Country Dropdown
    const countryDropdown = Selector('#country');
    const countryOption = countryDropdown.find('option');

    //Selector for the Timezone Dropdown
    const tzDropdown = Selector('#timezone');
    const tzOption = tzDropdown.find('option');

    //Selector for the Balance Platform Dropdown
    const bpDropdown = Selector('#balancePlatform');
    const bpOption = bpDropdown.find('option');

    //Selector for the Organization Type Dropdown
    const otDropdown = Selector('#legalEntityOrganizationType');
    const otOption = otDropdown.find('option');

    //Selector for the State/Providence Dropdown
    const stateDropdown = Selector('#legalEntityState');
    const stateOption = stateDropdown.find('option');

    //Selector for the Role Dropdown
    const roleDropdown = Selector('#role');
    const roleOption = roleDropdown.find('option');

    await t
        .typeText('input#email', 'sebastiandario.rodriguez+15@endava.com')
        .typeText('input#password', 'endava1!')
        .click('button#next')
        .click('a.flex:nth-child(3) > div:nth-child(2)')
        .expect('.text-3xl').ok()
        .expect('div.mb-4:nth-child(3)').ok()
        .click('.pushRight > button')
        .click('div.cursor-pointer:nth-child(2)')
        .expect('h3').ok()
        .click(editionDropdown)
        .click(editionOption.withText('Class'))
        .typeText('#jackrabbitId', `TestCafe${randomNumber}`)
        .click(legalDropdown)
        .click(legalOption.withText('Organization'))
        .click(countryDropdown)
        .click(countryOption.withText('United States'))
        .wait(1000)
        .click(tzDropdown)
        .click(tzOption.withText('Mountain Standard Time'))
        .typeText('#legalEntityLegalName', `ClassTestCafe${randomNumber}`)
        .click(bpDropdown)
        .click(bpOption.withText('JackrabbitTechnologies_BalancePlatform_TEST'))
        .click(otDropdown)
        .click(otOption.withText('Association Incorporated'))
        .typeText('#firstName', 'Testcafe')
        .typeText('#lastName', 'Rodriguez')
        .typeText('#companyEmail', 'sebastiandario.rodriguez@endava.com')
        .typeText('#phone', '9108213456')
        .typeText('#legalEntityStreet1', '12 Main Street')
        .typeText('#legalEntityStreet2', '12th floor')
        .typeText('#legalEntityCity', 'Hope Mills')
        .click(stateDropdown)
        .click(stateOption.withText('North Carolina'))
        .typeText('#legalEntityPostalCode', '20250')
        .click('.gap-4')
        .click('button.cursor-pointer:nth-child(2)')
        .expect('[data-testid="success-icon"]').ok()
        .expect('.flex-1 > :nth-child(2)').ok()
        .typeText('#userEmail', `sebastiandario.rodriguez+${randomNumber}@endava.com`)
        .typeText('#confirmUserEmail', `sebastiandario.rodriguez+${randomNumber}@endava.com`)
        .click('.my-10 > .cursor-pointer')
        .click(roleDropdown)
        .click(roleOption.withText('Owner'))
        .click('.gap-y-10')
        .click('button.cursor-pointer:nth-child(2)')
        .expect('.flex-1').ok()
        .click('.mt-12');
});

test('Visit Client Page and Make a Search', async t => {
    const dropdown = Selector('#searchForStatus');
    const option = dropdown.find('option');

    await t
        .typeText('input#email', 'sebastiandario.rodriguez+15@endava.com')
        .typeText('input#password', 'endava1!')
        .click('button#next')
        .click('a.flex:nth-child(3) > div:nth-child(2)')
        .expect(Selector('.text-3xl').exists).ok()
        .typeText('#searchForAccountHolderCode', 'testcafe')
        .click(dropdown)
        .click(option.withText('In Progress'))
        .click('button.cursor-pointer:nth-child(3)')
        .wait(1000)
        .expect('tr.bg-white:nth-child(1) > td:nth-child(2)').ok();
});
