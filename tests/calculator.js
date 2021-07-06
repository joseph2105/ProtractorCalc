describe('calculator test',function(){

    it('addition test',function(){
        browser.get('https://juliemr.github.io/protractor-demo/');
        element(by.model('first')).sendKeys('5');
        element(by.model('second')).sendKeys('5');
        element(by.css('[ng-click="doAddition()"]')).click();
        //let result=element(by.cssContainingText('.ng-binding','10'));
        let result=element.all(by.css('.ng-binding')).get(0);
        expect(result.getText()).toEqual('10');
        browser.sleep(5000);
        
    });
});