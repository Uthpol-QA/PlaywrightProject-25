const { test, expect } = require('@playwright/test')


//hooks
test.beforeAll(async () => {

    console.log('This beforeAll hook')
})

test.afterAll(async () => {

    console.log('This afterAll hook')
})

test.beforeEach(async () => {

    console.log('This beforeEach hook')
})

test.afterEach(async () => {

    console.log('This afterEach hook')
})


//groupingS
test.describe('Group 01', () => {

    test('Test 01', async ({ page }) => {
        console.log('This is Test 01')
    })

    test('Test 02', async ({ page }) => {
        console.log('This is Test 02')
    })

})


test.describe('Group 02', () => {

    test('Test 03', async ({ page }) => {
        console.log('This is Test 03')
    })

    test('Test 04', async ({ page }) => {
        console.log('This is Test 04')
    })

})

// only specific group to execute --> test.describe.only()
// only specific test to execute --> test.only()
// only specific group to skip --> test.describe.skip()
// only specific test to skip --> test.skip()
