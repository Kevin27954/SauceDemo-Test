import type { Locator, Page } from "@playwright/test";

class LoginPage {
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

	async loginValidUser(user: string, pass: string): Promise<Page> {
		await this.input_user.fill(user);
		await this.input_pass.fill(pass);
		await this.btn_login.click();

		return this.page;
	}

	async loginInvalidUser(user: string, pass: string) {
		await this.input_user.fill(user);
		await this.input_pass.fill(pass);
		await this.btn_login.click();
	}

	getErrorMsg(): Locator {
		return this.error;
	}

	async goto() {
		await this.page.goto("https://www.saucedemo.com");
	}
}

export { LoginPage };
