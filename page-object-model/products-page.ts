import type { Locator, Page } from "@playwright/test";

class ProductsPage {
	page: Page;

	header: Locator;

	constructor(page: Page) {
		this.header = page.getByText("Products");
	}

	getHeader() {
		return this.header;
	}
}

export { ProductsPage };
