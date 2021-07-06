let homePage = require('../pages/calculatorHomePage')

describe('Calculator with POM', function(){
it('addition', function(){
    homePage.get('https://juliemr.github.io/protractor-demo/');
    homePage.enterFirstNumber(9);
    homePage.enterSecondNumber('2');
    homePage.clickGoButton();
    homePage.verifyResult('11');
});
it('subtraction', function(){
    homePage.get('https://juliemr.github.io/protractor-demo/');
    homePage.enterFirstNumber(7);
    homePage.enterSecondNumber('2');
    homePage.clickGoButton();
    homePage.verifyResult('9');
});
});