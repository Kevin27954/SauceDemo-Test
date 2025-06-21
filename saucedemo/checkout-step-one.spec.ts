import { expect } from "@playwright/test";
import { test } from "../fixture/fixtures.ts";
import { CheckoutStepTwoPage } from "../page-object-model/checkout-step-two.ts";
import { CartPage } from "../page-object-model/cart-page.ts";

test.describe("checkout-step-one", () => {
	test("fill fields with blank inputs", async ({ checkoutStepOnePage }) => {
		await checkoutStepOnePage.fillForm("", "", "");
		await checkoutStepOnePage.clickBtnCont();

		await expect(checkoutStepOnePage.getDivErr()).toContainText("Error");
	});

	test("fill fields with valid inputs", async ({
		checkoutStepOnePage,
		page,
	}) => {
		await checkoutStepOnePage.fillForm("Kevin", "Liu", "123456");
		await checkoutStepOnePage.clickBtnCont();

		expect(checkoutStepOnePage.getUrl()).toContain("checkout-step-two.html");

		const cst = new CheckoutStepTwoPage(page);
		await expect(cst.getTitle()).toContainText("Checkout: Overview");
	});

	test("click btn cancel", async ({ checkoutStepOnePage, page }) => {
		await checkoutStepOnePage.clickBtnCancel();

		const cp = new CartPage(page);
		await expect(cp.getSpanTitle()).toContainText("Your Cart");
	});
});
