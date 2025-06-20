import { test as base } from "@playwright/test";
import { ProductsPage } from "../page-object-model/products-page";
import { LoginPage } from "../page-object-model/login-page";
import { CartPage } from "../page-object-model/cart-page";

type Fixtures = {
	productsPage: ProductsPage;
	loginPage: LoginPage;
	cartsEmptyPage: CartPage;
	cartsNotEmptyPage: CartPage;
};

const test = base.extend<Fixtures>({
	cartsNotEmptyPage: async ({ loginPage }, use) => {
		const page = await loginPage.loginValidUser(
			"standard_user",
			"secret_sauce",
		);

		const pp = new ProductsPage(page);
		await pp.clickBtnAddAllItem();

		const cp = new CartPage(pp.getPage());
		await cp.goto();

		await use(cp);
	},

	cartsEmptyPage: async ({ loginPage }, use) => {
		const page = await loginPage.loginValidUser(
			"standard_user",
			"secret_sauce",
		);

		const cp = new CartPage(page);
		cp.goto();

		await use(cp);
	},

	productsPage: async ({ loginPage }, use) => {
		const page = await loginPage.loginValidUser(
			"standard_user",
			"secret_sauce",
		);
		const pp = new ProductsPage(page);

		await use(pp);
	},

	loginPage: async ({ page }, use) => {
		const lp = new LoginPage(page);
		await lp.goto();

		await use(lp);
	},
});

export { test };
