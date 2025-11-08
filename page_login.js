import { By } from "selenium-webdriver";

class Page_login {
    static inputUsername = By.css('[data-test="username"]');
    static inputPassword = By.xpath('//*[@data-test="password"]');
    static buttonLogin = By.className('submit-button btn_action');
}

//module.exports = PageLogin;
export default Page_login;