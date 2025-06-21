import type { Locator, Page } from "@playwright/test";

type Item = {
	price: string;
	name: string;
};

class ProductsPage {
	page: Page;

	span_title: Locator;

	ahref_allitem: Locator;
	ahref_about: Locator;
	ahref_logout: Locator;
	ahref_item: Locator;

	btn_hamburger: Locator;
	btn_additem: Locator;
	btn_removeitem: Locator;

	span_cartBadge: Locator;

	select_sortContainer: Locator;

	div_itemName: Locator;
	div_itemPrice: Locator;

	constructor(page: Page) {
		this.page = page;

		this.span_title = page.getByTestId("title");

		this.btn_hamburger = page.getByRole("button", { name: "open menu" });
		this.ahref_allitem = page.getByText("all items");
		this.ahref_about = page.getByText("about");
		this.ahref_logout = page.getByText("logout");

		this.btn_additem = page.getByRole("button", { name: "add to cart" });
		this.btn_removeitem = page.getByRole("button", { name: "remove" });
		this.span_cartBadge = page.getByTestId("shopping-cart-badge");

		this.select_sortContainer = page.getByTestId("product-sort-container");

		this.div_itemName = page.getByTestId("inventory-item-name");
		this.div_itemPrice = page.getByTestId("inventory-item-price");

		this.ahref_item = page.getByRole("link").filter({ has: this.div_itemName });
	}

	getPage(): Page {
		return this.page;
	}

	getTitle(): Locator {
		return this.span_title;
	}

	getItemName(): Locator {
		return this.page.getByTestId("inventory-item-name");
	}

	async clickBtnHamburger() {
		await this.btn_hamburger.click();
	}

	async clickAhrefAllItem() {
		await this.ahref_allitem.click();
	}

	async clickAhrefAbout() {
		await this.ahref_about.click();
	}

	async clickAhrefLogout() {
		await this.ahref_logout.click();
	}

	async clickBtnAddItemRand() {
		await this.btn_additem
			.nth(Math.floor(Math.random() * (await this.btn_additem.count())))
			.click();
	}

	async clickBtnAddAllItem() {
		const numItem = await this.btn_additem.count();
		for (let i = 0; i < numItem; i++) {
			const btn = this.btn_additem.first();
			await btn.click();
		}
	}

	async clickBtnRemoveItemRand() {
		await this.btn_removeitem
			.nth(Math.floor(Math.random() * (await this.btn_removeitem.count())))
			.click();
	}

	getSpanCartBadge(): Locator {
		return this.span_cartBadge;
	}

	async clickSortAZ() {
		await this.select_sortContainer.click();
		await this.select_sortContainer.selectOption("az");
	}

	async clickSortZA() {
		await this.select_sortContainer.click();
		await this.select_sortContainer.selectOption("za");
	}

	async clickSortLoHi() {
		await this.select_sortContainer.click();
		await this.select_sortContainer.selectOption("lohi");
	}

	async clickSortHiLo() {
		await this.select_sortContainer.click();
		await this.select_sortContainer.selectOption("hilo");
	}

	async clickRandItem(): Promise<string | null> {
		const numItem = await this.ahref_item.count();
		const randNum = Math.floor(Math.random() * numItem);

		const loc = this.ahref_item.nth(randNum);

		const item = await loc.textContent();
		await loc.click();

		return item;
	}

	/**
	 * This should fail and the test it is used in if at any time it was not able to get the element.
	 * I feel like this is important since that would mean the page has some poetntial issues.
	 */
	async getItems(): Promise<Item[]> {
		const numitem = await this.div_itemName.count();
		const items: Item[] = [];
		for (let i = 0; i < numitem; i++) {
			const [name, price] = await Promise.all([
				this.div_itemName.nth(i).textContent(),
				this.div_itemPrice.nth(i).textContent(),
			]);

			items.push({
				name: name.trim(),
				price: price.trim(),
			});
		}

		return items;
	}
}

export { ProductsPage };
