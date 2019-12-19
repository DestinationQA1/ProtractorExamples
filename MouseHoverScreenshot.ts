import {browser, element, by, By, ElementFinder} from 'protractor';
describe('My Test Suite', function() {
    let fs = require('fs');
	// abstract writing screen shot to a file
	    function writeScreenShot(data, filename) {
	        let stream = fs.createWriteStream(filename);
	        stream.write(new Buffer(data, 'base64'));
	        stream.end();
	    }
	
	it('Mouse Hover', function() {
        browser.get('https://angularjs.org/');
        var ele = element(by.css("code[popover-trigger='mouseenter']"));
        browser.actions().mouseMove(ele).perform().then(function( ) {
           browser.sleep(7000);
           browser.takeScreenshot().then(function (png) {
               writeScreenShot(png, 'MouseOver.png');
           });
        });
    });
});