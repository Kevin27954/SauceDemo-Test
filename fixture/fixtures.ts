import { test as base } from "@playwright/test";
import type { ProductsPage } from "../page-object-model/products-page";
import { LoginPage } from "../page-object-model/login-page";

type Fixtures = {
	productsPage: ProductsPage;
	loginPage: LoginPage;
};

const test = base.extend<Fixtures>({
	productsPage: async ({ loginPage }, use) => {
		const pp = await loginPage.loginValidUser("standard_user", "secret_sauce");

		await use(pp);
	},

	loginPage: async ({ page }, use) => {
		const lp = new LoginPage(page);
		await lp.goto();

		await use(lp);
	},
});

export { test };
