class Update {
  constructor(page) {
    this.page = page;
    this.click_myaccount = page.locator(".ico-account");
    this.lastnameTF = page.locator("#LastName");
    this.click_Cus_saveBTN = page.locator("#save-info-button");
    this.click_address = page
      .locator(`//a[@href="/customer/addresses"]`)
      .first();
    this.click_edit = page.locator(
      `//button[@class="button-2 edit-address-button"]`,
    );
    this.phoneTF = page.locator("#Address_PhoneNumber");
    this.addres_save = page.locator(
      `//button[@class="button-1 save-address-button"]`,
    );
  }
  async click_myaccountLink() {
    await this.click_myaccount.click();
  }
  async change_lastname(nlastname) {
    await this.lastnameTF.clear();
    await this.lastnameTF.fill(nlastname);
  }
  async click_saveBTN() {
    await this.click_Cus_saveBTN.click();
  }
  async click_addressLink() {
    await this.click_address.click();
  }
  async click_editBTN() {
    await this.click_edit.click();
  }
  async change_phone(nphone) {
    await this.phoneTF.fill(nphone);
  }
  async click_Final_saveBTN() {
    await this.addres_save.click();
  }
}
module.exports = { Update };
