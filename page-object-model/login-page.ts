import type { Locator, Page } from "@playwright/test";
import { ProductsPage } from "./products-page.ts";

class LoginPage {
	/**
	 * @param {import('@playwright/test').Page} page
	 */

	page: Page;

	input_user: Locator;
	input_pass: Locator;
	btn_login: Locator;
	error: Locator;

	constructor(page: Page) {
		this.page = page;

		this.input_user = page.getByTestId("username");
		this.input_pass = page.getByTestId("password");
		this.btn_login = page.getByRole("button", { name: "login" });
		this.error = page.getByTestId("error");
	}

	async loginValidUser(user: string, pass: string): Promise<ProductsPage> {
		await this.input_user.fill(user);
		await this.input_pass.fill(pass);
		await this.btn_login.click();

		return new ProductsPage(this.page);
	}

	async loginInvalidUser(user: string, pass: string) {
		await this.input_user.fill(user);
		await this.input_pass.fill(pass);
		await this.btn_login.click();
	}

	getErrorMsg(): Locator {
		return this.error;
	}
}

export { LoginPage };
