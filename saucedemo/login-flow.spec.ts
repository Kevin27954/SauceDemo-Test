import { expect } from "@playwright/test";
import { test } from "../fixture/fixtures.ts";

test.describe("login test", () => {
	test("login-correct-user", async ({ loginPage }) => {
		const user = "standard_user";
		const pass = "secret_sauce";

		const products_page = await loginPage.loginValidUser(user, pass);

		await expect(products_page.getHeader()).toBeVisible();
	});

	test("login-locked-user", async ({ loginPage }) => {
		const user = "locked_out_user";
		const pass = "secret_sauce";

		await loginPage.loginInvalidUser(user, pass);

		await expect(loginPage.getErrorMsg()).toContainText(
			"Sorry, this user has been locked out.",
		);
	});

	test("login-blank-username", async ({ loginPage }) => {
		const user = "";
		const pass = "random";

		await loginPage.loginInvalidUser(user, pass);

		await expect(loginPage.getErrorMsg()).toContainText("Username is required");
	});

	test("login-blank-password", async ({ loginPage }) => {
		const user = "random";
		const pass = "";

		await loginPage.loginInvalidUser(user, pass);

		await expect(loginPage.getErrorMsg()).toContainText("Password is required");
	});
});
