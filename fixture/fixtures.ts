import { test as base } from "@playwright/test";
import { ProductsPage } from "../page-object-model/products-page";
import { LoginPage } from "../page-object-model/login-page";
import { CartPage } from "../page-object-model/cart-page";
import { CheckoutStepOnePage } from "../page-object-model/checkout-step-one";
import { CheckoutStepTwoPage } from "../page-object-model/checkout-step-two";

type Fixtures = {
	loginPage: LoginPage;

	productsPage: ProductsPage;

	cartsEmptyPage: CartPage;
	cartsNotEmptyPage: CartPage;

	checkoutStepOnePage: CheckoutStepOnePage;

	checkoutStepTwoPage: CheckoutStepTwoPage;
	checkoutStepTwoItemsPage: CheckoutStepTwoPage;
};

const test = base.extend<Fixtures>({
	checkoutStepTwoItemsPage: async ({ cartsNotEmptyPage, page }, use) => {
		const cst = new CheckoutStepTwoPage(page);
		await cst.goto();

		await use(cst);
	},

	checkoutStepTwoPage: async ({ loginPage, page }, use) => {
		await loginPage.loginValidUser("standard_user", "secret_sauce");

		const cst = new CheckoutStepTwoPage(page);
		await cst.goto();

		await use(cst);
	},

	checkoutStepOnePage: async ({ loginPage, page }, use) => {
		await loginPage.loginValidUser("standard_user", "secret_sauce");

		const cso = new CheckoutStepOnePage(page);
		await cso.goto();

		await use(cso);
	},

	cartsNotEmptyPage: async ({ loginPage, page }, use) => {
		await loginPage.loginValidUser("standard_user", "secret_sauce");

		const pp = new ProductsPage(page);
		await pp.clickBtnAddAllItem();

		const cp = new CartPage(page);
		await cp.goto();

		await use(cp);
	},

	cartsEmptyPage: async ({ loginPage, page }, use) => {
		await loginPage.loginValidUser("standard_user", "secret_sauce");

		const cp = new CartPage(page);
		cp.goto();

		await use(cp);
	},

	productsPage: async ({ loginPage, page }, use) => {
		await loginPage.loginValidUser("standard_user", "secret_sauce");
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
