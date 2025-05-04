const { test, expect } = require('@playwright/test')

test('Upload Single File', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/upload');

    //upload action
    await page.locator('#file-upload').setInputFiles('tests/UploadFiles/TestImage.jpg');

    //submit btn
    await page.click('#file-submit');


    await page.waitForTimeout(3000);


    //validation: Assert upload success
    await expect(page.locator('h3')).toHaveText('File Uploaded!');
});


test.only('Upload Multi Files', async ({ page }) => {

    await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php');

    await page.locator('#filesToUpload')
        .setInputFiles(['tests/UploadFiles/TestImage.jpg', 'tests/UploadFiles/TestText.txt'])


    await page.waitForTimeout(3000);


    //validation: Assert upload success
    await expect(page.locator('#fileList li:nth-child(1)')).toHaveText('TestImage.jpg');
    await expect(page.locator('#fileList li:nth-child(2)')).toHaveText('TestText.txt');

    await page.waitForTimeout(3000);

    //remove files
    await page.locator('#filesToUpload').setInputFiles([])
    await expect(page.locator('#fileList li:nth-child(1)')).toHaveText('No Files Selected');

    await page.waitForTimeout(3000);
})