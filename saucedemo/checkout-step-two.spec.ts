import { expect } from "@playwright/test";
import { test } from "../fixture/fixtures.ts";
import { ProductsPage } from "../page-object-model/products-page.ts";
import { CheckoutFinishPage } from "../page-object-model/checkout-complete.ts";
import { calcTax } from "../util/util.ts";

test.describe("checkout step two", async () => {
	test("click cancel button", async ({ checkoutStepTwoPage, page }) => {
		await checkoutStepTwoPage.clickBtnCancel();

		const pp = new ProductsPage(page);
		await expect(pp.getTitle()).toContainText("Products");
	});

	test("click finish button", async ({ checkoutStepTwoPage, page }) => {
		await checkoutStepTwoPage.clickBtnFinish();

		const cfp = new CheckoutFinishPage(page);

		await expect(cfp.getTitle()).toContainText("Checkout: Complete!");
	});

	test("ensure items price correctly calculated", async ({
		checkoutStepTwoPage,
	}) => {
		const prices = await checkoutStepTwoPage.getItemPrice();

		const price = prices.reduce((prev, curr) => {
			return prev + curr;
		}, 0);

		await expect(checkoutStepTwoPage.getSubTotal()).toContainText(
			price.toString(),
		);

		const tax = calcTax(price);
		await expect(checkoutStepTwoPage.getTaxLabel()).toContainText(
			tax.toString(),
		);

		const total = price + tax;
		await expect(checkoutStepTwoPage.getTotalLabel()).toContainText(
			total.toString(),
		);
	});
});
