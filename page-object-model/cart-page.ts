import type { Locator, Page } from "@playwright/test";

class CartPage {
	page: Page;

	btn_continueShopping: Locator;
	btn_checkout: Locator;
	btn_removeItem: Locator;

	span_cartBadge: Locator;
	span_title: Locator;

	constructor(page: Page) {
		this.page = page;

		this.btn_continueShopping = page.getByTestId("continue-shopping");
		this.btn_checkout = page.getByTestId("checkout");
		this.btn_removeItem = page.getByTestId("remove-sauce-labs-backpack");

		this.span_cartBadge = page.getByTestId("shopping-cart-badge");
		this.span_title = page.getByTestId("title");
	}

	getSpanCartBadge(): Locator {
		return this.span_cartBadge;
	}

	getSpanTitle(): Locator {
		return this.span_title;
	}

	async goto() {
		await this.page.goto("https://saucedemo.com/cart.html");
	}

	async clickContinueShopping() {
		await this.btn_continueShopping.click();
	}

	async clickCheckout() {
		await this.btn_checkout.click();
	}

	/**
	 * This clicks the `first` item it sees.
	 */
	async clickRemoveItemOne() {
		await this.btn_removeItem.first().click();
	}

	getUrl(): string {
		return this.page.url();
	}
}

export { CartPage };
