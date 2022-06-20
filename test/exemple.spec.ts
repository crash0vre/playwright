import { test, expect } from '@playwright/test'


test("Click on element", async ({ page }) => {
    await page.goto("http://zero.webappsecurity.com/index.html")
    await page.click("#signin_button")
    await page.click("text=Sign in")

    const errorMessage = await page.locator(".alert-error")
    await expect(errorMessage).toContainText("Login and/or password are wrong.")
})

test.describe("Test suit", () => {
    test("Working with Inputs", async ({ page }) => {
        await page.goto("http://zero.webappsecurity.com/index.html")
        await page.click("#signin_button")
        await page.type('#user_login', 'some username')
        await page.type('#user_password', 'somepassword')
        await page.click("text=Sign in")

        const errorMessage = await page.locator(".alert-error")
        await expect(errorMessage).toContainText("Login and/or password are wrong.")

    })

    test("Assersion", async ({ page }) => {
        await page.goto('http://example.com/')
        await expect(page).toHaveURL('http://example.com/')
        await expect(page).toHaveTitle('Example Domain')

        const element = await page.locator('h1')
        await expect(element).toBeVisible()
        await expect(element).toHaveText("Example Domain")
        await expect(element).toHaveCount(1)

        const nonExistingElement = await page.locator('h5')
        await expect(nonExistingElement).not.toBeVisible()
    })
})

