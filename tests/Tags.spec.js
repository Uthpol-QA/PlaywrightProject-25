const { test, expect } = require('@playwright/test')


test('test1@sani', async ({ page }) => {

    console.log('This is test1')
})

test('test2@sani', async ({ page }) => {

    console.log('This is test2')
})

test('test3@reg', async ({ page }) => {

    console.log('This is test3')
})

test('test4@reg', async ({ page }) => {

    console.log('This is test4')
})

test('test5@sani@reg', async ({ page }) => {

    console.log('This is test5')
})


/*
npx playwright test Tags.spec.js --project=chromium --headed --grep "@reg"
    --> Only test3,test4,test5 executed

npx playwright test Tags.spec.js --project=chromium --headed --grep "@sani"
    --> Only test1,test2,test5 executed

npx playwright test Tags.spec.js --project=chromium --headed --grep "@reg|@sani”
    --> All executed

npx playwright test Tags.spec.js --project=chromium --headed 
--grep "@reg" --grep-invert "@sani"
    --> Only test3,test4 executed and test5 ignored
*/