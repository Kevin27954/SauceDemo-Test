import { expect } from "@playwright/test";
import { test } from "../fixture/fixtures.ts";

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
		await expect(productsPage.getSpanCartBadge()).toBeVisible({
			visible: false,
		});
	});

	test("sort A-Z alphabetically", async ({ productsPage }) => {
		await productsPage.clickSortAZ();
		const items = await productsPage.getItems();

		for (let i = 1; i < items.length; i++) {
			const compName = items[i - 1].name.localeCompare(items[i].name);
			expect(compName).toBe(-1);
		}
	});

	test("sort Z-A alphabetically", async ({ productsPage }) => {
		await productsPage.clickSortZA();
		const items = await productsPage.getItems();

		for (let i = 1; i < items.length; i++) {
			const compName = items[i - 1].name.localeCompare(items[i].name);
			expect(compName).toBe(1);
		}
	});

	test.only("sort Low-High price", async ({ productsPage }) => {
		await productsPage.clickSortLoHi();
		const items = await productsPage.getItems();

		for (let i = 1; i < items.length; i++) {
			const compPrice = items[i - 1].price.localeCompare(items[i].price);
			if (compPrice === 0) {
				const compName = items[i - 1].name.localeCompare(items[i].name);
				expect(compName).toBe(-1);
			} else {
				expect(compPrice).toBe(-1);
			}
		}
	});

	test.only("sort High-Low price", async ({ productsPage }) => {
		await productsPage.clickSortHiLo();
		const items = await productsPage.getItems();
		for (let i = 1; i < items.length; i++) {
			const compPrice = items[i - 1].price.localeCompare(items[i].price);
			if (compPrice === 0) {
				const compName = items[i - 1].name.localeCompare(items[i].name);
				expect(compName).toBe(-1);
			} else {
				expect(compPrice).toBe(-1);
			}
		}
	});
});
