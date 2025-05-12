const { test, expect } = require('@playwright/test')

// only
/*
test.only('test1', async ({ page }) => {

    console.log('This is test1')
})
*/


//skip
/*
test.skip('test2', async ({ page }) => {

    console.log('This is test2')
})

test('test3', async ({ page }) => {

    console.log('This is test3')
})
*/

/*
//skip with conditions
test('test4', async ({ page, browserName }) => {

    console.log('This is test4')

    if (browserName === 'firefox') { // If 'chromium', test will be skipped.
        test.skip()
    }
})
*/


/*
//fixme
test('test5', async ({ page }) => {

    test.fixme()
    console.log('This is test5')
})

test('test6', async ({ page, browserName }) => {
    console.log('This is test6')
})
*/


//fail
/*
test('test7', async ({ page, browserName }) => {

    test.fail() //expecting to be fail
    console.log('This is test7')

    expect(1).toBe(1) //if expect and actual match --> test failed
})

test('test8', async ({ page, browserName }) => {
    test.fail() //expecting to be fail
    console.log('This is test8')

    expect(1).toBe(3) //if expect and actual mismatched --> test passed
})
*/

/*
//fail annotation with conditions
test('test9', async ({ page, browserName }) => {

    console.log('This is test9') 

    if(browserName==='firefox'){  //actual fail (used chromium here)
        test.fail()  //expected fail
    }
    //here test passed because expected and actual matched, both failed
})
*/


/*
// slow
//from playwright config, after the ‘use’ block --> set timeout block to 500

test('test10', async ({ page }) => {

    page.goto('https://www.demoblaze.com/index.html')  //default time 30 millisec changed to 0.5millisec, so test failed
    console.log('This is test10')
})

test('test11', async ({ page }) => {

    test.slow()  //this makes 3x slow, means custom 1 millisec timeout become 3 millisec
    page.goto('https://www.demoblaze.com/index.html')  //timeout=1.5millisec, so test passed
    console.log('This is test11')
})
*/

//code level slowdown
test('test12', async ({ page }) => {
    test.setTimeout(10); // 10 milliseconds
    await page.goto('https://www.demoblaze.com/index.html');
    console.log('This is test12');
});
