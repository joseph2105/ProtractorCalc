let loginPage = require('../../pages/orange_hrm/loginPage')

describe('Login page in Orange HRM', function(){
it('enter the user name and password', function(){
    browser.waitForAngularEnabled(false);//to automate non-angular sites
    loginPage.getUrl('https://opensource-demo.orangehrmlive.com/index.php/auth/login');
    loginPage.enterUserName('Admin');
    loginPage.enterPassword('admin123');
    loginPage.clickLoginButton();
    
})
});