import type { Locator, Page } from "@playwright/test";

class CheckoutFinishPage {
	page: Page;

	span_title: Locator;

	constructor(page: Page) {
		this.page = page;

		this.span_title = page.getByTestId("title");
	}

	getTitle(): Locator {
		return this.span_title;
	}
}

export { CheckoutFinishPage };
