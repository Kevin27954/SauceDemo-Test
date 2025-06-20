import { expect } from "@playwright/test";
import { test } from "../fixture/fixtures.ts";

test.describe("cart test - nav & static elements", () => {
	test("click continue shopping", async ({ cartsEmptyPage }) => {
		await cartsEmptyPage.clickContinueShopping();

		expect(cartsEmptyPage.getUrl()).toContain("inventory.html");
	});

	test("click checkout", async ({ cartsEmptyPage }) => {
		await cartsEmptyPage.clickCheckout();

		expect(cartsEmptyPage.getUrl()).toContain("checkout-step-one.html");
	});
});

test.describe
	.only("cart test - with items in cart", () => {
		test("remove item from cart", async ({ cartsNotEmptyPage }) => {
			await cartsNotEmptyPage.clickRemoveItemOne();
			await expect(cartsNotEmptyPage.getSpanCartBadge()).toContainText("5");
		});
	});
