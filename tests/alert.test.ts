import { test, expect } from '@playwright/test';

test('Handling Alerts - Accept', async ({ page }) => {

    await page.goto("https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo")

    // Alert event listener
    page.on("dialog", async (alert) => {
        const text = alert.message();
        console.log(text);
        await alert.accept();
    })

    await page.locator("button:has-text('Click Me')").nth(0).click();


})

test('Handling Alerts - Dismiss', async ({ page }) => {

    await page.goto("https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo")

    // Alert event listener
    page.on("dialog", async (alert) => {
        const text = alert.message();
        console.log(text);
        await alert.dismiss();
    })

    await page.locator("button:has-text('Click Me')").nth(1).click();
    expect(page.locator("#confirm-demo")).toContainText("Cancel!")

})

test('Handling Alerts - Input Text', async ({ page }) => {

    await page.goto("https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo")

    // Alert event listener
    page.on("dialog", async (alert) => {
        const text = alert.defaultValue();
        console.log("Before: " + await text)
        await alert.accept("Phil");
    })

    await page.locator("button:has-text('Click Me')").nth(2).click();
    expect(page.locator("#prompt-demo")).toContainText("Phil")
    console.log("After: " + await page.locator("#prompt-demo").textContent())
})

test('Handling Modal Alerts - Single', async ({ page }) => {

    await page.goto("https://www.lambdatest.com/selenium-playground/bootstrap-modal-demo")
    await page.click("//button[@data-target='#myModal']")
    await page.click("(//button[contains(.,'Save Changes')])[1]")
})