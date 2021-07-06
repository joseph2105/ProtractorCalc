let loginPage = function(){

    let userName_input = element(by.id('txtUsername'));
    let password_input = element(by.id('txtPassword'));
    let loginButton = element(by.name('Submit'));

    this.getUrl = function(url){
        browser.get(url);
    }

    this.enterUserName = function(name){
        userName_input.sendKeys(name);
    }

    this.enterPassword = function(password){
        password_input.sendKeys(password);
    }

    this.clickLoginButton = function(){
        loginButton.click();
    }
};
module.exports = new loginPage();