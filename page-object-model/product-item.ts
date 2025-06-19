import type { Locator, Page } from "@playwright/test";

class ProductItemPage {
	page: Page;
	div_itemName: Locator;

	constructor(page: Page) {
		this.page = page;

		this.div_itemName = page.getByTestId("inventory-item-name");
	}

	getItemName(): Locator {
		return this.div_itemName;
	}
}

export { ProductItemPage };
