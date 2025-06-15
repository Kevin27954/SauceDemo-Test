import { test, expect } from "@playwright/test";
import { LoginPage } from "../page-object-model/login-page";
// import { ProductsPage } from "../page-object-model/products-page";

let lp: LoginPage;

test.describe("login test", () => {
    test.beforeEach(async ({ page }) => {
        await page.goto("https://www.saucedemo.com");
        lp = new LoginPage(page);
    });

    test("login-correct-user", async ({ }) => {
        const user = "standard_user";
        const pass = "secret_sauce";

        let products_page = await lp.loginValidUser(user, pass);

        await expect(products_page.getHeader()).toBeVisible();
    });

    test("login-locked-user", async ({ }) => {
        const user = "locked_out_user";
        const pass = "secret_sauce";

        await lp.loginInvalidUser(user, pass);

        await expect(lp.getErrorMsg()).toContainText("Sorry, this user has been locked out.");
    });

    test("login-blank-username", async ({ }) => {
        const user = "";
        const pass = "random";

        await lp.loginInvalidUser(user, pass);

        await expect(lp.getErrorMsg()).toContainText("Username is required");
    });

    test("login-blank-password", async ({ }) => {
        const user = "random";
        const pass = "";

        await lp.loginInvalidUser(user, pass);

        await expect(lp.getErrorMsg()).toContainText("Password is required");
    });
})
