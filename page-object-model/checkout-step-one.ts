import type { Locator, Page } from "@playwright/test";

class CheckoutStepOnePage {
	page: Page;

	input_Zip: Locator;
	input_LastName: Locator;
	input_FirstName: Locator;

	btn_continue: Locator;
	btn_cancel: Locator;

	div_err: Locator;

	constructor(page: Page) {
		this.page = page;

		this.input_FirstName = page.getByTestId("firstName");
		this.input_LastName = page.getByTestId("lastName");
		this.input_Zip = page.getByTestId("postalCode");

		this.btn_continue = page.getByTestId("continue");
		this.btn_cancel = page.getByTestId("cancel");

		this.div_err = page.getByTestId("error");
	}

	async goto() {
		await this.page.goto("https://www.saucedemo.com/checkout-step-one.html");
	}

	getUrl(): string {
		return this.page.url();
	}

	getDivErr(): Locator {
		return this.div_err;
	}

	async fillForm(first: string, last: string, zip: string) {
		await this.input_FirstName.fill(first);
		await this.input_LastName.fill(last);
		await this.input_Zip.fill(zip);
	}

	async clickBtnCont() {
		await this.btn_continue.click();
	}

	async clickBtnCancel() {
		await this.btn_cancel.click();
	}
}

export { CheckoutStepOnePage };
