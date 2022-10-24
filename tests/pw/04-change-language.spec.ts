import {test, expect} from '@playwright/test';


test('change languages', async ({page}) => {
  const sessionStorage = process.env.SESSION_STORAGE;
  await page.addInitScript(storage => {
    const entries = JSON.parse(storage);
    for (const [key, value] of Object.entries(entries)) {
      window.sessionStorage.setItem(key, value as string);
    }
  }, sessionStorage);

  await page.goto('/cas/tg');

  const dropdown = page.locator('menu div.select');

  expect(await dropdown.locator('button').innerText()).toBe('English');
  await expect(dropdown.locator('ul')).toHaveClass('hide');

  await dropdown.locator('button').click();

  await expect(dropdown.locator('ul')).toHaveClass('show');

  const languages = dropdown.locator('ul li');
  await languages.locator('text="Deutsch"').click();

  await expect(dropdown.locator('ul')).toHaveClass('hide');
  expect(await dropdown.locator('button').innerText()).toBe('Deutsch');

  await expect(page.locator('h2', {hasText: 'Zertifizierungsstelle'})).toHaveCount(1);
  await expect(page.locator('label', {hasText: 'Aktuelle Zertifizierungsstelle'})).toHaveCount(1);

  await expect(page.locator('th', {hasText: 'ASN'})).toHaveCount(2);
  await expect(page.locator('th', {hasText: 'Präfix'})).toHaveCount(1);
  await expect(page.locator('th', {hasText: 'Status'})).toHaveCount(1);

  await expect(page.locator('a', {hasText: 'Support Verträge'})).toHaveCount(1);
  await expect(page.locator('a', {hasText: 'Lesen Sie die Dokumentation'})).toHaveCount(1);
  await expect(page.locator('a', {hasText: 'Ein Problem melden'})).toHaveCount(1);

  const seen = page.locator('span.state.roa_seen');
  if (await seen.count() > 0){
    await expect(await seen.first().innerText()).toBe('SICHTBAR');

  }

  const notFound = page.locator('span.state.announcement_not_found');
  if (await notFound.count() > 0){
    await expect(await notFound.first().innerText()).toBe('NICHT GEFUNDEN');

  }

  const disallowing = page.locator('span.state.roa_disallowing');
  if (await disallowing.count() > 0){
    await expect(await disallowing.first().innerText()).toBe('Verursacht ungültige Ankündigungen');

  }

  const invalidLength = page.locator('span.state.announcement_invalid_length');
  if (await invalidLength.count() > 0){
    await expect(await invalidLength.first().innerText()).toBe('UNGÜLTIGE LÄNGE');

  }

  await page.locator('table tbody tr td button.expand').first().click();
  await expect(page.locator('h3', {hasText: /Autorisiert \d* BGP-Ankündigungen/})).toHaveCount(1);
  await expect(page.locator('h3', {hasText: /Verweigert \d* BGP-Ankündigungen/})).toHaveCount(1);
});