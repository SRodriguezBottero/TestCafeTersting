import { Selector } from "testcafe";

fixture('Getting Started')
    .page('https://devexpress.github.io/testcafe/example/');

// Tests
test('My first test', async t => {
    await t
        .typeText('#developer-name', 'Sebastian Rodriguez')
        .click('#submit-button')
        .expect(Selector('#article-header').innerText).eql('Thank you, Sebastian Rodriguez!');
});