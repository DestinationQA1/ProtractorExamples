import {browser, element, by, By, ElementFinder, ElementArrayFinder} from 'protractor';
describe('My Test Suite', function() {
	it('Do addition and get result async', async function() {
		console.log('executing addition test');
        await browser.get('http://juliemr.github.io/protractor-demo/');
        await element(by.model("first")).sendKeys("10");
        await element.all(by.options("value for (key, value) in operators")).get(0).click();
        await element(by.model("second")).sendKeys("10");
        await element(by.buttonText("Go!")).click();
        let Result: ElementFinder = element(by.binding("latest"));
        console.log(await Result.getText());
  });
  
	// it('Do addition and get result', function() {
	// 	console.log('executing addition test');
  //       browser.get('http://juliemr.github.io/protractor-demo/');
  //       element(by.model("first")).sendKeys("10");
  //       element.all(by.options("value for (key, value) in operators")).get(0).click();
  //       element(by.model("second")).sendKeys("10");
  //       element(by.buttonText("Go!")).click();
  //       let Result: ElementFinder = element(by.binding("latest"));
  //       Result.getText().then((text) => {
  //           console.log(text);
  //         });

  //       let HistoryRow:ElementArrayFinder=element.all(by.repeater("result in memory"));
  //       HistoryRow.count().then((cnt=>{
  //           console.log("No of rows in history table = " +cnt);
  //       }));
          
  //       HistoryRow.each(element => {
  //           element.getText().then((text) => {
  //               console.log(text);
  //             });
  //       });

	// });
});