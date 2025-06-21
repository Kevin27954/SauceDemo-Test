import { expect, type Locator, type Page } from "@playwright/test";

class CheckoutStepTwoPage {
	page: Page;

	span_title: Locator;
	btn_cancel: Locator;
	btn_finish: Locator;

	div_itemPrice: Locator;
	div_subTotal: Locator;
	div_taxLabel: Locator;
	div_totalLabel: Locator;

	constructor(page: Page) {
		this.page = page;

		this.span_title = page.getByTestId("title");

		this.btn_cancel = page.getByTestId("cancel");
		this.btn_finish = page.getByTestId("finish");

		this.div_itemPrice = page.getByTestId("inventory_item_price");
		this.div_subTotal = page.getByTestId("subtotal-label");
		this.div_taxLabel = page.getByTestId("tax-label");
		this.div_totalLabel = page.getByTestId("total-label");
	}

	async goto() {
		await this.page.goto("https://www.saucedemo.com/checkout-step-two.html");
	}

	getTitle(): Locator {
		return this.span_title;
	}

	getSubTotal(): Locator {
		return this.div_subTotal;
	}

	getTaxLabel(): Locator {
		return this.div_taxLabel;
	}

	getTotalLabel(): Locator {
		return this.div_totalLabel;
	}

	async clickBtnCancel() {
		await this.btn_cancel.click();
	}

	async clickBtnFinish() {
		await this.btn_finish.click();
	}

	/**
	 * This should fail and the test it is used in if at any time it was not able to get the element.
	 * I feel like this is important since that would mean the page has some poetntial issues.
	 */
	async getItemPrice(): Promise<number[]> {
		const prices: number[] = [];
		const numPrices = await this.div_itemPrice.count();

		for (let i = 0; i < numPrices; i++) {
			let price = await this.div_itemPrice.textContent();
			expect(price).toBeTruthy();

			price = price.trim().replace("$", "");
			prices.push(Number(price));
		}

		return prices;
	}
}
export { CheckoutStepTwoPage };
