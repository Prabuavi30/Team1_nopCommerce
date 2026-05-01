class LoginPage {
    constructor(page) {
        this.page = page;
        this.userloginpg = page.locator('//a[@class="ico-login"]');
        this.email = page.locator('//input[@class="email"]');
        this.password = page.locator('//input[@class="password"]');
        this.loginBTN = page.locator('//button[@class="button-1 login-button"]');

        this.myaccountbtn = page.locator('//a[@class="ico-account"]');
        this.orderbtn = page.locator('(//a[@href="/order/history"])[1]');
        this.orderid = page.locator('//div[@class="section order-item"]/h2');
        this.orderdetails = page.locator('//ul[@class="info"]');
    }

    async launchurl(url) {
        await this.page.goto(url);
    }

    async login(email, password) {
        await this.userloginpg.click();
        await this.email.fill(email);
        await this.password.fill(password);
        await this.loginBTN.click();
    }

    async gotoOrders() {
        await this.myaccountbtn.click();
        await this.orderbtn.click();
    }

    async getOrders() {
        return await this.orderid.allTextContents();
    }

    async getOrderDetails() {
        return await this.orderdetails.allTextContents();
    }
}

module.exports = { LoginPage };
