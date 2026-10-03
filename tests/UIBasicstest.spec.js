const {test , expect} = require('@playwright/test');



//browser is global fixture provided by playwright test runner
test ('First Playwright Test', async ({ page }) => 
{
 
    const cardTitles = page.locator(".card-body a");
 
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
   // await page.pause();
   // await expect(page).toHaveTitle('Google');
    await page.locator('#username').fill('rahulshettyacademy');
    await page.locator('#password').fill('Learning@830$3mK2');
    await page.locator('#signInBtn').click();
    //line 16 - to extract error message during login failure and print it in console
    //line17 - to verify the error message is displayed on the page ie assesrtion.
   // console.log (await page.locator("[style*='block']").textContent());
    //await expect(page.locator('[style*=block]')).toContainText('Incorrect');
    
    //This will select first item from the list of elements and click on it.
    console.log(await cardTitles.nth(0).textContent());
    //This will select all the elements and print the text content of all the 
    // elements in console or page.
    const allTitle = await cardTitles.allTextContents();
    console.log(allTitle);

});


test.only('UI Controls', async ({ page }) => 
{

    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    page.locator('#username').fill('rahulshettyacademy');
     page.locator('#signInBtn').fill('Learning@830$3mK2');
    const dropdown = page.locator('select.form-control');
    await dropdown.selectOption('consultant');


        
});