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
