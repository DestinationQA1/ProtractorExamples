import {browser, element, by, By} from 'protractor';
describe('My Test Suite', function() {
	//https://stackoverflow.com/questions/31010850/storing-values-outside-of-promises-in-protractor
	it('first test case', async function() {
        console.log('executing first test');
        await browser.get('https://angularjs.org');
        
        let prev = (await element.all(by.repeater('todo in todoList.todos'))).length;
        
        element(by.model('todoList.todoText')).sendKeys('Learn protractor');
        element(by.xpath("//input[@value='add']")).click();
        let later = (await element.all(by.repeater('todo in todoList.todos'))).length;
		
        let cntUpdated = Promise.all([prev, later]).then(function(info) {
          let prev = info[0];
          let later = info[1];
          return (later==(prev+1));
        });
      
      expect(cntUpdated).toBeTrue;
	});
});