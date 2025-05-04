/*
Run from terminal --> npx playwright codegen

Click record when finsh steps, copy-paste code to a desire New file.
It has Pic locator for --> writing a locator and Target for --> code conversiton.

*/

import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    await page.getByPlaceholder('Username').fill('Admin');

    await page.getByPlaceholder('Password').fill('admin123');

    await page.getByRole('button', { name: 'Login' }).click();

});