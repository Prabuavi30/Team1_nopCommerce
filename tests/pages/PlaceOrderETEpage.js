const { expect } = require("@playwright/test");

class PlaceOrderETEPage {
  constructor(page) {
    this.page = page;

    // Dynamic test data
    const timestamp = Date.now();
    this.testEmail = `testuser_${timestamp}@test.com`;
    this.testPassword = "Test@12345";
    this.testFirstName = "Test";
    this.testLastName = "User";

    // Header
    this.registerLink = page.locator("a.ico-register");
    this.loginLink = page.locator("a.ico-login");
    this.logoutLink = page.locator("a.ico-logout");
    this.cartLink = page.locator("a.ico-cart");
    this.searchInput = page.locator("#small-searchterms");
    this.searchButton = page.locator("button.search-box-button");

    // Registration
    this.genderMale = page.locator("#gender-male");
    this.firstNameInput = page.locator("#FirstName");
    this.lastNameInput = page.locator("#LastName");
    this.emailInput = page.locator("#Email");
    this.passwordInput = page.locator("#Password");
    this.confirmPasswordInput = page.locator("#ConfirmPassword");
    this.registerButton = page.locator("#register-button");
    this.registrationResult = page.locator("div.result");

    // Login
    this.loginEmailInput = page.locator("#Email");
    this.loginPasswordInput = page.locator("#Password");
    this.loginButton = page.locator("button.login-button");

    // Product
    this.productList = page.locator(".product-title a");
    this.addToCartButton = page.locator(
      ".add-to-cart-panel button.add-to-cart-button",
    );
    this.successNotification = page.locator("#bar-notification .content");

    // Cart
    this.termsCheckbox = page.locator("#termsofservice");
    this.checkoutButton = page.locator("#checkout");

    // Billing
    this.billingCountry = page.locator("#BillingNewAddress_CountryId");
    this.billingState = page.locator("#BillingNewAddress_StateProvinceId");
    this.billingCity = page.locator("#BillingNewAddress_City");
    this.billingAddress1 = page.locator("#BillingNewAddress_Address1");
    this.billingZip = page.locator("#BillingNewAddress_ZipPostalCode");
    this.billingPhone = page.locator("#BillingNewAddress_PhoneNumber");
    this.billingContinueButton = page.locator(
      "#billing-buttons-container button.new-address-next-step-button",
    );

    // Checkout steps
    this.shippingMethodContinue = page.locator(
      "button.shipping-method-next-step-button",
    );
    this.paymentMethodContinue = page.locator(
      "button.payment-method-next-step-button",
    );
    this.paymentInfoContinue = page.locator(
      "button.payment-info-next-step-button",
    );
    this.confirmOrderButton = page.locator(
      "button.confirm-order-next-step-button",
    );
  }

  // Navigation
  async navigateTo() {
    await this.page.goto("/");
  }

  // Registration
  async register() {
    await this.page.goto("/register");

    await this.firstNameInput.waitFor({ state: "visible" });

    await this.genderMale.click();
    await this.firstNameInput.fill(this.testFirstName);
    await this.lastNameInput.fill(this.testLastName);
    await this.emailInput.fill(this.testEmail);
    await this.passwordInput.fill(this.testPassword);
    await this.confirmPasswordInput.fill(this.testPassword);

    await Promise.all([
      this.page.waitForNavigation(),
      this.registerButton.click(),
    ]);
  }

  async verifyRegistration() {
    await expect(this.registrationResult).toBeVisible();
    await expect(this.registrationResult).toContainText(
      "Your registration completed",
    );
  }

  // Login
  async login() {
    await this.page.goto("/login");

    await this.loginEmailInput.waitFor({ state: "visible" });

    await this.loginEmailInput.fill(this.testEmail);
    await this.loginPasswordInput.fill(this.testPassword);

    await Promise.all([
      this.page.waitForNavigation(),
      this.loginButton.click(),
    ]);
  }

  async verifyLogin() {
    await expect(this.logoutLink).toBeVisible();
  }

  // Product
  async searchProduct(productName) {
    await this.searchInput.fill(productName);

    await Promise.all([
      this.page.waitForNavigation(),
      this.searchButton.click(),
    ]);
  }

  async clickProduct(productName) {
    const product = this.productList.filter({ hasText: productName }).first();
    await product.click();
  }

  async addToCart() {
    const qtyInput = this.page.locator(".add-to-cart-panel .qty-input");

    if (await qtyInput.isVisible()) {
      await qtyInput.fill("2");
    }

    await this.addToCartButton.click();
  }

  async verifySuccessNotification() {
    await expect(this.successNotification).toBeVisible();
    await expect(this.successNotification).toContainText(
      "The product has been added",
    );

    const closeBtn = this.page.locator("#bar-notification .close");
    if (await closeBtn.isVisible()) {
      await closeBtn.click();
    }
  }

  // Cart
  async goToCart() {
    await this.cartLink.click();
  }

  async proceedToCheckout() {
    await this.termsCheckbox.check();

    await Promise.all([
      this.page.waitForNavigation(),
      this.checkoutButton.click(),
    ]);
  }

  // Billing
  async fillBillingAddress() {
    await this.billingCountry.selectOption({
      label: "United States of America",
    });
    await this.billingState.selectOption({ label: "New York" });

    await this.billingCity.fill("New York");
    await this.billingAddress1.fill("123 Test Street");
    await this.billingZip.fill("10001");
    await this.billingPhone.fill("1234567890");

    await this.billingContinueButton.click();
  }

  async selectShippingMethod() {
    await this.shippingMethodContinue.click();
  }

  async selectPaymentMethod() {
    await this.paymentMethodContinue.click();
  }

  async confirmPaymentInfo() {
    await this.paymentInfoContinue.click();
  }

  async confirmOrder() {
    await Promise.all([
      this.page.waitForNavigation(),
      this.confirmOrderButton.click(),
    ]);
  }

  async verifyOrderConfirmation() {
    const successMessage = this.page.getByRole("heading", {
      name: "Your order has been successfully processed!",
    });

    await expect(successMessage).toBeVisible();
  }
}

module.exports = { PlaceOrderETEPage };
