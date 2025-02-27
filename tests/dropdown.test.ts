import { test, expect } from '@playwright/test';

test('Handling Dropdowns - Single', async ({ page }) => {

    await page.goto("https://www.lambdatest.com/selenium-playground/select-dropdown-demo")

    await page.selectOption("#select-demo", {
        // label: "Tuesday"
        // value: "Friday"
        index: 5 // "Thursday"
    });
})

test('Handling Dropdowns - Multiple', async ({ page }) => {

    await page.goto("https://www.lambdatest.com/selenium-playground/select-dropdown-demo")

    await page.waitForTimeout(3000);

    await page.selectOption("#multi-select", [{
        label: "Florida"
    }, {
        value: "Texas"
    }, {
        index: 4 // "Ohio"
    }]);

    await page.waitForTimeout(4000);
})

test('Handling Bootstrap Dropdowns', async ({ page }) => {

    await page.goto("https://www.lambdatest.com/selenium-playground/jquery-dropdown-search-demo");

    // await selectCountry("Denmark");
    // await selectCountry("South Africa");
    await selectCountry("United States of America");

    async function selectCountry(countryName) {
        await page.click("#country+span");
        await page.locator("ul#select2-country-results").locator("li", {
            hasText: countryName
        }).click();
    }
})

