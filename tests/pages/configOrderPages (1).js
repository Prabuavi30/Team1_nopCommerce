class ConfigOrderPage {
  constructor(page) {
    this.page = page;
    this.baseURL = "https://demo.nopcommerce.com";
    
    const timestamp = Date.now();
    this.testEmail = `testuser_${timestamp}@test.com`;
    this.testPassword = "Test@12345";
    this.testFirstName = "Test";
    this.testLastName = "User";

    this.registerLink = "a.ico-register";
    this.genderMale = "#gender-male";
    this.firstNameInput = "#FirstName";
    this.lastNameInput = "#LastName";
    this.emailInput = "#Email";
    this.passwordInput = "#Password";
    this.confirmPasswordInput = "#ConfirmPassword";
    this.registerButton = "#register-button";
    this.registrationSuccessMessage = ".result";

    this.loginLink = "a.ico-login";
    this.loginEmailInput = "#Email";
    this.loginPasswordInput = "#Password";
    this.loginButton = ".login-button";
    this.loggedInAccount = "a.ico-account";

    this.computersMenu = ".header-menu a[href='/computers']";
    this.desktopsSubMenu = ".header-menu a[href='/desktops']";

    this.buildYourOwnComputerLink = "a[href='/build-your-own-computer']";
    this.productTitle = "h1";

    this.processorDropdown = "#product_attribute_1";
    this.ramDropdown = "#product_attribute_2";
    this.hdd320GB = "#product_attribute_3_6";
    this.hdd400GB = "#product_attribute_3_7";
    this.osVistaHome = "#product_attribute_4_8";
    this.osVistaPremium = "#product_attribute_4_9";
    this.softwareMSOffice = "#product_attribute_5_10";
    this.softwareAcrobat = "#product_attribute_5_11";
    this.softwareTotalCommander = "#product_attribute_5_12";
    this.addToCartButton = "#add-to-cart-button-1";
    this.addToCartSuccessMessage = ".bar-notification.success";

    this.shoppingCartLink = "a.ico-cart";
    this.termsOfServiceCheckbox = "#termsofservice";
    this.checkoutButton = "#checkout";

    this.billingFirstName = "#BillingNewAddress_FirstName";
    this.billingLastName = "#BillingNewAddress_LastName";
    this.billingEmail = "#BillingNewAddress_Email";
    this.billingCountry = "#BillingNewAddress_CountryId";
    this.billingCity = "#BillingNewAddress_City";
    this.billingAddress1 = "#BillingNewAddress_Address1";
    this.billingZip = "#BillingNewAddress_ZipPostalCode";
    this.billingPhone = "#BillingNewAddress_PhoneNumber";
    this.billingContinueButton = ".new-address-next-step-button";

    this.shippingMethodGround = "#shippingoption_0";
    this.shippingMethodContinueButton = ".shipping-method-next-step-button";

    this.paymentMethodCOD = "#paymentmethod_0";
    this.paymentMethodContinueButton = ".payment-method-next-step-button";

    this.paymentInfoContinueButton = ".payment-info-next-step-button";

    this.confirmOrderButton = ".confirm-order-next-step-button";
    this.orderConfirmationMessage = ".section.order-completed";
    this.orderSuccessTitle = ".title strong";
  }

  async waitForCloudflare() {
    try {
      await this.page.waitForSelector(".header", { timeout: 30000 });
    } catch {
      const title = await this.page.title();
      if (title.toLowerCase().includes("just a moment") || title.toLowerCase().includes("cloudflare")) {
        throw new Error(
          "Cloudflare challenge was not resolved within 30 seconds. " +
          "Please run with --headed and manually solve the challenge."
        );
      }
    }
  }

  async goToHomePage() {
    await this.page.goto(this.baseURL);
    await this.page.waitForLoadState("domcontentloaded");
    await this.waitForCloudflare();
  }

  async goToRegisterPage() {
    await this.page.click(this.registerLink);
    await this.page.waitForLoadState("domcontentloaded");
  }

  async fillRegistrationForm() {
    await this.page.click(this.genderMale);
    await this.page.fill(this.firstNameInput, this.testFirstName);
    await this.page.fill(this.lastNameInput, this.testLastName);
    await this.page.fill(this.emailInput, this.testEmail);
    await this.page.fill(this.passwordInput, this.testPassword);
    await this.page.fill(this.confirmPasswordInput, this.testPassword);
  }

  async clickRegister() {
    await this.page.click(this.registerButton);
    await this.page.waitForLoadState("domcontentloaded");
  }

  async getRegistrationSuccessMessage() {
    return await this.page.textContent(this.registrationSuccessMessage);
  }

  async logout() {
    await this.page.click("a.ico-logout");
    await this.page.waitForLoadState("domcontentloaded");
  }

  async clickLoginLink() {
    await this.page.click(this.loginLink);
    await this.page.waitForLoadState("domcontentloaded");
  }

  async loginWithRegisteredCredentials() {
    await this.page.fill(this.loginEmailInput, this.testEmail);
    await this.page.fill(this.loginPasswordInput, this.testPassword);
    await this.page.click(this.loginButton);
    await this.page.waitForLoadState("domcontentloaded");
    await this.waitForCloudflare();
  }

  async isLoggedIn() {
    return await this.page.isVisible(this.loggedInAccount);
  }

  async navigateToDesktops() {
    await this.page.hover(this.computersMenu);
    await this.page.click(this.desktopsSubMenu);
    await this.page.waitForLoadState("domcontentloaded");
  }

  async clickBuildYourOwnComputer() {
    await this.page.locator(this.buildYourOwnComputerLink).first().click();
    await this.page.waitForLoadState("domcontentloaded");
  }

  async getProductTitle() {
    return await this.page.textContent(this.productTitle);
  }

  async selectProcessor(processorText) {
    await this.page.selectOption(this.processorDropdown, { label: processorText });
    await this.page.waitForTimeout(1000);
  }

  async selectRAM(ramText) {
    await this.page.selectOption(this.ramDropdown, { label: ramText });
    await this.page.waitForTimeout(1000);
  }

  async selectHDD(hddOption) {
    if (hddOption === "320 GB") {
      await this.page.click(this.hdd320GB);
    } else if (hddOption === "400 GB") {
      await this.page.click(this.hdd400GB);
    }
    await this.page.waitForTimeout(500);
  }

  async selectOS(osOption) {
    if (osOption === "Vista Home Basic") {
      await this.page.click(this.osVistaHome);
    } else if (osOption === "Vista Premium") {
      await this.page.click(this.osVistaPremium);
    }
    await this.page.waitForTimeout(500);
  }

  async selectSoftware(softwareOption) {
    if (softwareOption.includes("Microsoft Office")) {
      await this.page.check(this.softwareMSOffice);
    }
    if (softwareOption.includes("Acrobat Reader")) {
      await this.page.check(this.softwareAcrobat);
    }
    if (softwareOption.includes("Total Commander")) {
      await this.page.check(this.softwareTotalCommander);
    }
    await this.page.waitForTimeout(500);
  }

  async clickAddToCart() {
    await this.page.click(this.addToCartButton);
    await this.page.waitForSelector(this.addToCartSuccessMessage, { timeout: 10000 });
  }

  async getAddToCartMessage() {
    return await this.page.textContent(this.addToCartSuccessMessage);
  }

  async goToShoppingCart() {
    await this.page.click(this.shoppingCartLink);
    await this.page.waitForLoadState("domcontentloaded");
  }

  async acceptTermsOfService() {
    await this.page.check(this.termsOfServiceCheckbox);
  }

  async clickCheckout() {
    await this.page.click(this.checkoutButton);
    await this.page.waitForLoadState("domcontentloaded");
  }

  async fillBillingAddress() {
    await this.page.waitForTimeout(3000);

    const countryDropdown = this.page.locator(this.billingCountry);
    if (await countryDropdown.isVisible()) {
      await this.page.waitForFunction(
        (selector) => {
          const select = document.querySelector(selector);
          return select && select.options.length > 1;
        },
        this.billingCountry,
        { timeout: 15000 }
      );

      await this.page.selectOption(this.billingCountry, "1");
      await this.page.waitForTimeout(2000);

      const firstNameField = this.page.locator(this.billingFirstName);
      if (await firstNameField.isVisible()) {
        const currentFirstName = await firstNameField.inputValue();
        if (!currentFirstName) {
          await this.page.fill(this.billingFirstName, this.testFirstName);
        }
      }

      const lastNameField = this.page.locator(this.billingLastName);
      if (await lastNameField.isVisible()) {
        const currentLastName = await lastNameField.inputValue();
        if (!currentLastName) {
          await this.page.fill(this.billingLastName, this.testLastName);
        }
      }

      const emailField = this.page.locator(this.billingEmail);
      if (await emailField.isVisible()) {
        const currentEmail = await emailField.inputValue();
        if (!currentEmail) {
          await this.page.fill(this.billingEmail, this.testEmail);
        }
      }

      await this.page.fill(this.billingCity, "New York");
      await this.page.fill(this.billingAddress1, "123 Test Street");
      await this.page.fill(this.billingZip, "10001");
      await this.page.fill(this.billingPhone, "1234567890");
    }
  }

  async continueBilling() {
    await this.page.click(this.billingContinueButton);
    await this.page.waitForTimeout(3000);
  }

  async continueShippingMethod() {
    await this.page.waitForSelector(this.shippingMethodContinueButton, {
      state: "visible",
      timeout: 10000,
    });
    await this.page.click(this.shippingMethodContinueButton);
    await this.page.waitForTimeout(3000);
  }

  async selectCODPaymentMethod() {
    await this.page.waitForSelector(this.paymentMethodCOD, {
      state: "visible",
      timeout: 10000,
    });
    await this.page.check(this.paymentMethodCOD);
  }

  async continuePaymentMethod() {
    await this.page.click(this.paymentMethodContinueButton);
    await this.page.waitForTimeout(3000);
  }

  async continuePaymentInfo() {
    await this.page.waitForSelector(this.paymentInfoContinueButton, {
      state: "visible",
      timeout: 10000,
    });
    await this.page.click(this.paymentInfoContinueButton);
    await this.page.waitForTimeout(3000);
  }

  async confirmOrder() {
    await this.page.waitForSelector(this.confirmOrderButton, {
      state: "visible",
      timeout: 10000,
    });
    await this.page.click(this.confirmOrderButton);
    await this.page.waitForLoadState("domcontentloaded");
  }

  async getOrderConfirmationMessage() {
    await this.page.waitForSelector(this.orderConfirmationMessage, { timeout: 15000 });
    return await this.page.textContent(this.orderConfirmationMessage);
  }
}

module.exports = { ConfigOrderPage };
