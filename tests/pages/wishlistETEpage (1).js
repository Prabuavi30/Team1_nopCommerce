// class WishlistPage {
//   constructor(page) {
//     this.page = page;

//     // Product page elements
//     this.Computerbtn=page.locator('//a[text()="Computers"]');
//     this.desktopbtn=page.locator('//a[text()="Desktops"]');
//     this.firstProductWishlistBtn = page.locator("button.add-to-wishlist-button").nth(2);

//     // Wishlist page
//     this.wishlistlabel=page.locator(".wishlist-label");
//     this.wishlistbtn=page.locator("#addtocart-473");
//     this.addtocartbtn=page.locator("//button[text()='Add to cart']");

//   }

//   async goToProductPage() 
//   {
//     await this.page.goto("https://demo.nopcommerce.com/desktops");
//   }
//   async gotodesktopbtn()
//   {
//      await this.desktopbtn.click()
//   }
//   async addProductToWishlist() {
//     await this.firstProductWishlistBtn.click();
//   }

//   async openWishlist() {
//     await this.wishlistlabel.click();
//   }

//   async addWishlistItemToCart() {
//     await this.wishlistbtn.check();
//     await this.addToCartBtn.click();
//   }
// }

// module.exports = { WishlistPage };


class WishlistPage {
  constructor(page) {
    this.page = page;


    this.registerLink = page.locator("a.ico-register");
    this.firstNameTF = page.locator("#FirstName");
    this.lastNameTF = page.locator("#LastName");
    this.regEmailTF = page.locator("#Email");
    this.regPasswordTF = page.locator("#Password");
    this.confirmPasswordTF = page.locator("#ConfirmPassword");
    this.registerBtn = page.locator("#register-button");
    this.logoutLink = page.locator("a.ico-logout");

    
    this.loginLink = page.locator("a.ico-login");
    this.emailTF = page.locator("#Email");
    this.passwordTF = page.locator("#Password");
    this.loginBtn = page.locator("button.login-button");

 
    this.computerBtn = page.locator("ul.top-menu.notmobile > li > a[href='/computers']").first();
    this.desktopBtn = page.locator("h2.title a[href='/desktops']").first();

  
    this.productItem = page.locator(".product-item").nth(1);
    this.addToWishlistBtn = page.locator("button.add-to-wishlist-button").first();


    this.wishlistLink = page.locator("a.ico-wishlist");
    this.wishlistCheckbox = page.locator("input[name='addtocart']");
    this.addToCartBtn = page.locator("button[name='addtocartbutton']");
  }

 
  async navigate(url) {
    await this.page.goto(url);
  }


  async register(firstName, lastName, email, password) {
    await this.registerLink.click();
    await this.firstNameTF.fill(firstName);
    await this.lastNameTF.fill(lastName);
    await this.regEmailTF.fill(email);
    await this.regPasswordTF.fill(password);
    await this.confirmPasswordTF.fill(password);
    await this.registerBtn.click();
    
   
    await this.page.waitForSelector('.result', { state: 'visible' });


    if (await this.logoutLink.isVisible()) {
      await this.logoutLink.click();
    }
  }

  // ===== LOGIN FUNCTION =====
  async login(email, password) {
    await this.loginLink.click();
    await this.emailTF.fill(email);
    await this.passwordTF.fill(password);
    await this.loginBtn.click();
    // Wait for login to complete (logout link should become visible)
    await this.page.waitForSelector("a.ico-logout", { state: 'visible' });
  }

  // ===== FLOW =====
  async clickComputers() {
    await this.computerBtn.click();
  }

  async clickDesktops() {
    await this.desktopBtn.click();
  }

  async selectProduct() {
    await this.productItem.locator('.product-title a').click();
  }

  async addProductToWishlist() {
    await this.addToWishlistBtn.click();
    // Wait for the success notification so we know the item was actually added
    await this.page.waitForSelector('.bar-notification.success', { state: 'visible' });
  }

  async openWishlist() {
    // Navigate directly to avoid notification bar blocking the click
    await this.page.goto('https://demo.nopcommerce.com/wishlist');
  }

  async addWishlistItemToCart() {
    await this.page.waitForSelector("input[name='addtocart']", { state: 'visible' });
    await this.wishlistCheckbox.first().check();
    await this.addToCartBtn.click();
  }
}

module.exports = { WishlistPage };