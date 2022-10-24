import {test, expect} from '@playwright/test';


test('change CA', async ({page}) => {
  const sessionStorage = process.env.SESSION_STORAGE;
  await page.addInitScript(storage => {
    const entries = JSON.parse(storage);
    for (const [key, value] of Object.entries(entries)) {
      window.sessionStorage.setItem(key, value as string);
    }
  }, sessionStorage);

  await page.goto('/cas/tg');

  const urlRegEx = new RegExp('cas/[a-zA-Z0-9@:%._+~#=]{1,256}$');
  await expect(page).toHaveURL(urlRegEx);

  const ca = page.url().substring(page.url().lastIndexOf('/') + 1);

  await expect(await page.locator('h2').innerText()).toBe(`Certificate Authority ${ca}`);

  const dropdown = page.locator('label[for="ca"]~div.select');

  await expect(await dropdown.locator('button').innerText()).toBe(ca);

  await expect(dropdown.locator('ul')).toHaveClass('hide');
  await dropdown.locator('button').click();

  const cas = dropdown.locator('ul li');

  // make sure to select any other CA that the one before
  let newCa = '';
  for (let i = 0; i < await cas.count(); i++) {
    if (await cas.nth(i).innerText() !== ca) {
      newCa = await cas.nth(i).innerText();
      await cas.nth(i).click();
      break;
    }
  }
  expect(newCa, 'This test needs at least two CAs to perform').not.toBe('');

  const regEx = new RegExp(`/cas/${newCa}$`);
  await expect(page).toHaveURL(regEx);

  await expect(await page.locator('h2').innerText()).toBe(`Certificate Authority ${newCa}`);

});