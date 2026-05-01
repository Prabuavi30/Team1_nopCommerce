class Register {
  constructor(page) {
    this.page = page;
    this.HregisterBTN = page.locator(`//a[@class="ico-register"]`);
    this.genderRadioBTN = page.locator("#gender-male");
    this.firstnameTF = page.locator("#FirstName");
    this.lastnameTF = page.locator("#LastName");
    this.emailTF = page.locator("#Email");
    this.passwordTF = page.locator("#Password");
    this.confirm_passwordTF = page.locator("#ConfirmPassword");
    this.FregisterBTN = page.locator("#register-button");
  }
  async launch(url) {
    await this.page.goto(url);
  }
  async click_registerBTN() {
    await this.HregisterBTN.click();
  }
  async click_genderRadioBTN() {
    await this.genderRadioBTN.check();
  }
  async enter_firstname(firstname) {
    await this.firstnameTF.fill(firstname);
  }
  async enter_lastname(lastname) {
    await this.lastnameTF.fill(lastname);
  }
  async enter_email(email) {
    await this.emailTF.fill(email);
  }
  async enter_password(password) {
    await this.enter_password.fill(password);
  }
  async enter_confirm_password(password) {
    await this.confirm_passwordTF.fill(password);
  }
  async click_Final_registerBTN() {
    await this.FregisterBTN.click();
  }
}
module.exports = { Register };
