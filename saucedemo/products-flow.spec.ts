import { expect } from "@playwright/test";
import { test } from "../fixture/fixtures.ts";
import { compStringPrice } from "../util/util.ts";
import { ProductItemPage } from "../page-object-model/product-item.ts";

test.describe("products test", () => {
	test("click hamburger then ahref - all items", async ({
		productsPage,
		page,
	}) => {
		await productsPage.clickBtnHamburger();
		await productsPage.clickAhrefAllItem();

		expect(page.url()).toContain("/inventory.html");
	});

	test("click hamburger then ahref - about", async ({ productsPage, page }) => {
		await productsPage.clickBtnHamburger();
		await productsPage.clickAhrefAbout();

		expect(page.url()).toContain("https://saucelabs.com/");
	});

	test("click hamburger then ahref - logout", async ({
		productsPage,
		page,
	}) => {
		await productsPage.clickBtnHamburger();
		await productsPage.clickAhrefLogout();

		expect(page.url()).toContain("https://www.saucedemo.com");
	});

	test("click add & remove item", async ({ productsPage }) => {
		await productsPage.clickBtnAddItemRand();
		await expect(productsPage.getSpanCartBadge()).toContainText("1");
		await productsPage.clickBtnAddItemRand();
		await expect(productsPage.getSpanCartBadge()).toContainText("2");

		await productsPage.clickBtnRemoveItemRand();
		await expect(productsPage.getSpanCartBadge()).toContainText("1");
		await productsPage.clickBtnRemoveItemRand();
		await expect(productsPage.getSpanCartBadge()).toBeHidden();
	});

	test("sort A-Z alphabetically", async ({ productsPage }) => {
		await productsPage.clickSortAZ();
		const items = await productsPage.getItems();

		const names = items.map((item) => item.name);
		const sortedNames = [...names].sort();

		expect(sortedNames).toStrictEqual(names);
	});

	test("sort Z-A alphabetically", async ({ productsPage }) => {
		await productsPage.clickSortZA();
		const items = await productsPage.getItems();

		const names = items.map((item) => item.name);
		const sortedNames = [...names].sort().reverse();

		expect(sortedNames).toStrictEqual(names);
	});

	test("sort Low-High price", async ({ productsPage }) => {
		await productsPage.clickSortLoHi();
		const items = await productsPage.getItems();

		const prices = items.map((item) => item.price);
		const sortedPrices = [...prices].sort(compStringPrice);

		expect(sortedPrices).toStrictEqual(prices);
	});

	test("sort High-Low price", async ({ productsPage }) => {
		await productsPage.clickSortHiLo();
		const items = await productsPage.getItems();

		const prices = items.map((item) => item.price);
		const sortedPrices = [...prices].sort(compStringPrice).reverse();

		expect(sortedPrices).toStrictEqual(prices);
	});

	test("click item, expect new page", async ({ productsPage, page }) => {
		const item = await productsPage.clickRandItem();
		const pi = new ProductItemPage(page);
		expect(item).toBeTruthy();

		await expect(pi.getItemName()).toHaveText(item);
	});
});
