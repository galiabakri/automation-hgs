const { openBrowser, goto, text, click, write, into, below, scrollDown, $, closeBrowser, waitFor, textBox } = require('taiko');
const { Given, When, Then, Before, After } = require('@cucumber/cucumber');

Before(async () => {
  await openBrowser({ headless: true });
});

After(async () => {
  await closeBrowser();
});

Given('I open the HGS career page', async () => {
  await goto('https://www.joinhgs.com/us/en');
});

Given('I dismiss the Nigeria popup if present', async () => {
  try {
    await waitFor(2000);
    if (await text('Nigeria').exists()) {
      await click('×');
    }
  } catch (e) {
    // No popup
  }
});

When('I search for {string} in {string}', async (role, location) => {
  await scrollDown(3);
  await waitFor(() => text('Search Jobs').exists());
  await write(role, into(textBox({ placeholder: 'Search Jobs' })));
  await write(location, into(textBox({ placeholder: 'Location' })));
  await click('Search');
  await waitFor(4000);
});

Then('I should see at least one job with title {string}', async (jobTitle) => {
  const jobExists = await text(jobTitle, below('Search Results')).exists();
  if (!jobExists) throw new Error(`Job with title "${jobTitle}" not found`);
});

When('I select the first job and click apply', async () => {
  await click('View more');
  await waitFor(2000);
  await click('Apply');
});

When('I fill in the first name {string} and last name {string}', async (firstName, lastName) => {
  await write(firstName, into(textBox({ placeholder: 'First Name' })));
  await write(lastName, into(textBox({ placeholder: 'Last Name' })));
});

When('I click the Apply button', async () => {
  await click('Apply');
});

Then('I should see an error message {string}', async (message) => {
  const errorExists = await text(message).exists();
  if (!errorExists) throw new Error(`Expected message "${message}" not found`);
});
