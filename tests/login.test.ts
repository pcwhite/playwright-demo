import { test } from "@playwright/test"


test("Login test demo", async ({browser}) => {

    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://ecommerce-playground.lambdatest.io/")
    await page.hover("//a[@data-toggle='dropdown']//span[contains(.,'My account')]")
    await page.click("'Login'")

    await page.fill("input[name='email']", "philupthecup87@gmail.com")
    await page.fill("input[name='password']", "**********") //TODO Implement solution to fetching password credentials
    await page.click("input[value='Login']")

    const newContext = await browser.newContext();

    const newPage = await newContext.newPage();
    await newPage.goto("https://ecommerce-playground.lambdatest.io/index.php?route=account/account");
})