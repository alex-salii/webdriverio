const assert = require('assert');
const mainPage = require('../page/main.page');
const apiPage = require('../page/api.page');
const helpPage = require('../page/help.page');
const versionsPage = require('../page/versions.page');
const signUpPage = require('../page/signUp.page');




describe('FINAL HOME PROJECT', () => {

  xit('New User Registration', async () => {
    browser.url('https://github.com/');
    await signUpPage.clickButton();
    await browser.pause(5000);
    let randomEmail = await faker.internet.email();
    console.log('Random email: ' + randomEmail)

  })


})

















describe('webdriver.io page', () => {
  xit('should have the right title', () => {
    browser.url('https://v6.webdriver.io')
    const title = browser.getTitle();
    assert.strictEqual(title, 'WebdriverIO · Next-gen browser automation test framework for Node.js')
  })

  xit('should demonstrate the addValue command', async () => {
    browser.url('https://v6.webdriver.io')
    let input = await  $('#search_input_react')
    input.addValue('test')
    await browser.pause(4000)
    input.addValue(123)
    await browser.pause(2000)

    value = await input.getValue()
    assert(value === 'test123') // true

    
  })

  xit('should demonstrate the setValue command', async () => {
    browser.url('https://v6.webdriver.io');
    let elem = await $('#search_input_react');
    elem.addValue('test123');
    await browser.pause(2000);
  })

  xit('should demonstrate the click command', async () => {
    browser.url('https://v6.webdriver.io');
    let blogButton = await $('[href="/docs/versions.html"]');
    await browser.pause(2000);
    blogButton.click()
    await browser.pause(2000);
    let versionButton = await $('[href="#current-version-stable"]')
    versionButton.click()
    await browser.pause(2000);
  })

  xit('should demonstrate the getAttribute', async () => {
    browser.url('https://v6.webdriver.io');
    const input = await $('#search_input_react');
    let attr = await input.getAttribute('title');
    console.log("Title attribute is:" + attr); // outputs: "Search"

    input.setValue('test123');
    attr = await input.getAttribute('value');
    console.log("Value attribute is: " + attr); //outputs: test123(null problem)
  })

  xit('should demonstrate the getLocation function', async () => {
    browser.url('https://v6.webdriver.io');
    const logo = await $('#search_input_react');
    const location = await logo.getLocation();
    console.log(location);

    const xLocation = await logo.getLocation('x');
    console.log("xLocation" + xLocation);
  })

  xit('should demonstrate the getText', async () => {
    browser.url('https://v6.webdriver.io');
    const versionButton = await $('[href="/docs/versions.html"]');
    console.log("Text for element: " + await versionButton.getText());
  })

  xit('should demonstrate the click command', async () => {
    browser.url('https://v6.webdriver.io');
    let apiButton = await $('[href="/docs/api.html"]');
    apiButton.click();
    await browser.pause(2000);
    console.log("Should demonstrate url: " + await browser.getUrl());
    let title = await $('.postHeaderTitle');
    console.log("Should demonstrate title text: " + await title.getText());

    const textHref = await $('//*[text()="JSONWire protocol"]');
    let attr = await textHref.getAttribute('href');
    console.log("Title attribute is: " + attr);
    let input = await $('#search_input_react')
    input.addValue('test is ')
    await browser.pause(2000)
    input.addValue('DONE!')
    await browser.pause(3000)
  })


  // ====================10========================

  xit('should defect if an element is enabled', async () => {
    browser.url('https://v6.webdriver.io');
    const versionButton = await $('[href="/docs/versions.html"]');
    let isEnabled = await versionButton.isEnabled();
    console.log("isEnabled: " + isEnabled); // outputs: true
  })

  xit('should detect the focus of an element', async () => {
    browser.url('https://v6.webdriver.io');
    const input = await $('#search_input_react');
    console.log("search.isFocused() before click:" + await input.isFocused()); // outputs: false
    await browser.pause(2000)
    input.click();
    console.log("search.isFocused() after click: " + await input.isFocused()); //outputs: true
    await browser.pause(2000);
  })

  xit('should move to element', async () => {
    browser.url('https://v6.webdriver.io');
    const gitHubLink = await $('#footer [href="https://github.com/webdriverio/webdriverio"]');
    await browser.pause(4000);
    gitHubLink.scrollIntoView();
    await browser.pause(3000);
  })

  // =====12==

  xit('should save a screenshot of the browser view', async () => {
    browser.url('https://v6.webdriver.io');
    const elem = await $('#footer [href="https://github.com/webdriverio/webdriverio"]');
    elem.saveScreenshot('elemScreenshot.png');
  })

  xit('should switch another window', async () => {
    // open url
    browser.url('https://google.com');
    // create new window
    browser.newWindow('https://v6.webdriver.io');
    await browser.pause(3000);

    //switch back via url match
    browser.switchWindow('google.com');
    await browser.pause(3000);

    //switch back via url match
    browser.switchWindow('Next-gen webDriver test framework');
    await browser.pause(2000);

  })


  // =====13=====
  xit('should get html for certain elements', async () => {
    browser.url('https://v6.webdriver.io');
    browser.waitUntil( async () => {
      return $('[href="/docs/versions.html"]').isDisplayed();
    }, 2000, 'versions is not displayed');
  })

  xit('should get html for certain elements', async () => {
    browser.url('https://v6.webdriver.io/docs/api.html');
    let outerHTML = await $('.siteNavGroupActive');
    console.log("outerHTML: " + await outerHTML.getHTML());

    let innerHTML = await $('.siteNavGroupActive');
    console.log("innerHTML: " + await innerHTML.getHTML(false));
  })

  // ===14====

  xit('should get html for certain elements', async () => {
    browser.url('https://v6.webdriver.io/docs/api.html');
    const textHref = await $('//*[text()="JSONWire protocol"]');
    let attr = await textHref.getAttribute('href');
    browser.newWindow(attr);
    await browser.pause(3000);

    let elem = await $('strong a[href="/SeleniumHQ/selenium/wiki"]');
    let isDisplayed = await elem.isDisplayed();
    console.log("should isDisplayed: " + isDisplayed);
    browser.switchWindow('https://v6.webdriver.io/docs/api.html');
    await browser.pause(3000);

    browser.waitUntil(async () => {
      return $('.postHeaderTitle').getText() === "API Docs";
    }, 2000, "it is API Docs");

    const screen = await $('.postHeaderTitle');
    screen.saveScreenshot('elemScreenshot.png');
    let isElem = await $('[href="https://twitter.com/webdriverio"]');
    let isDisplayedElement = await isElem.isDisplayed();
    console.log("should isDisplayedElement: " + isDisplayedElement);
    await browser.pause(3000);

    let isDisplayedInViewPort = await $('[href="https://twitter.com/webdriverio"]');
    let viewPort = await isDisplayedInViewPort.isDisplayedInViewport();
    console.log("should isDisplayedInViewPort: " + viewPort);

    let scroll = await $('[href = "https://twitter.com/webdriverio"]');
    scroll.scrollIntoView();

    let isElemTwo = await $('[href="https://twitter.com/webdriverio"]');
    let isDisplayedElementTwo = await isElemTwo.isDisplayed();
    console.log("should isDisplayedElement Two: " + isDisplayedElementTwo);
    await browser.pause(3000);

    let isDisplayedInViewPortTwo = await $('[href="https://twitter.com/webdriverio"]');
    let viewPortTwo = await isDisplayedInViewPortTwo.isDisplayedInViewport();
    console.log("should isDisplayedInViewPort Two: " + viewPortTwo);


    const button = await $('[href="/docs/api.html"]');
    console.log("search.isFocused() before click:" + await button.isFocused()); // outputs: false
    await browser.pause(2000)
    let cli = await $('.siteNavGroupActive');
    cli.click();
    console.log("search.isFocused() after click: " + await button.isFocused()); //outputs: true
    await browser.pause(2000);
    
  })

  // ===18===


  // it.only('shold switch to another window', async () => {
  //   //open url
  //   browser.url('http://google.com');
  //   //create new window
  //   browser.newWindow('https://v6.webdriver.io');
  //   await browser.pause(2000);

  //   //switch back via url match
  //   browser.switchWindow('google.com');
  //   await browser.pause(2000);
  //   //switch back via url match
  //   browser.switchWindow('Next-gen WebDriver test framework');
  //   await browser.pause(2000);

  // })
  
  // it.skip('should wait unit text has changed', async () => {
  //   browser.url('https://v6.webdriver.io');
  //   await browser.pause(2000);
  // })

  // ===19===дз
  // 1

  xit('singIn to GitHub with valid username or email address and password', async () => {
    browser.url('http://github.com/');
    let button = await $('[href="/login"]');
    button.click();
    await browser.pause(5000);
    let userName = await $('[id="login_field"]');
    userName.setValue('hi123');
    await browser.pause(2000);
    let password = await $('[id="password"]');
    password.setValue('Pass1');
    await browser.pause(2000);
    let buttonSingIn = await $('[class="btn btn-primary btn-block"]');
    buttonSingIn.click();
    await browser.pause(2000);
  })

  // 2
  xit('check for registered email', async () => {
    browser.url('http://github.com/');
    let button = await $('[class="HeaderMenu-link flex-shrink-0 d-inline-block no-underline border color-border-tertiary rounded px-2 py-1"]');
    button.click();
    await browser.pause(9000);
    let inputEmail = await $('[id="email"]');
    inputEmail.addValue('ssaalliiyy9977@gmail.com');
    await browser.pause(4000);
    let value = await $('[class="mb-0"]');
    let textResult = await value.getText();
    console.log('should value text ' + await textResult)
    assert(await textResult === "Email is invalid or already taken");
  })

  // 3
  xit('singIn to GitHub with valid username or email address and not valid password(error)', async () => {
    browser.url('http://github.com/');
    let button = await $('[href="/login"]');
    button.click();
    await browser.pause(5000);
    let userName = await $('[id="login_field"]');
    userName.setValue('hi123');
    await browser.pause(2000);
    let password = await $('[id="password"]');
    password.setValue('error');
    await browser.pause(2000);
    let buttonSingIn = await $('[class="btn btn-primary btn-block"]');
    buttonSingIn.click();
    await browser.pause(2000);
    let value = await $('[class="container-lg px-2"]');
    let textResult = await value.getText();
    console.log('should value text ' + await textResult)
    assert( await textResult === "Incorrect username or password.");
  })

  // 4
  xit('singIn to GitHub with not valid username or email address(error) and valid password', async () => {
    browser.url('http://github.com/');
    let button = await $('[href="/login"]');
    button.click();
    await browser.pause(5000);
    let userName = await $('[id="login_field"]');
    userName.setValue('error');
    await browser.pause(2000);
    let password = await $('[id="password"]');
    password.setValue('Pass1');
    await browser.pause(2000);
    let buttonSingIn = await $('[class="btn btn-primary btn-block"]');
    buttonSingIn.click();
    await browser.pause(2000);
    let value = await $('[class="container-lg px-2"]');
    let textResult = await value.getText();
    console.log('should value text ' + await textResult)
    assert(await textResult === "Incorrect username or password.");
  })

  // 5
  xit('download zip file from repository', async () => {
    browser.url('http://github.com/');
    let input = await $('[class="form-control input-sm header-search-wrapper p-0 js-chromeless-input-container header-search-wrapper-jump-to position-relative d-flex flex-justify-between flex-items-center"]');
    input.click();
    input.addValue('cat');
    await browser.pause(5000);
    let button = await $('[class="js-jump-to-badge-search-text-global"]');
    button.click();
    await browser.pause(5000);
    let link = await $('[href="/dianping/cat"]');
    link.click();
    await browser.pause(5000);
    let codeButton = await $('[class="btn btn-primary"]');
    codeButton.click();
    let downloadButton = await $('[href="/dianping/cat/archive/refs/heads/master.zip"]');
    downloadButton.click();
    await browser.pause(15000);
    const screen = await $('[class="logged-out env-production page-responsive intent-mouse"]');
    screen.saveScreenshot('elemScreenshot.png');
    await browser.pause(3000);
  })

})

describe('webdriver.io l > 25', () => {
  xit('should demonstrate the addValue command', async () => {
    browser.url('https://v6.webdriver.io');
    await mainPage.setUserName('test ');
    await browser.pause(2000);
    await mainPage.setUserName("type with method");
    await browser.pause(2000);
  })


  xit('should demonstrate click the button API', async () => {
    browser.url('https://v6.webdriver.io');
    await buttonPage.clickButtonApi();
    await browser.pause(3000);
  })


})


describe('webdriver.io l > 28', () => {
 
  xit('should demonstrate click the button API', async () => {
    browser.url('https://v6.webdriver.io');
    await apiPage.clickButton();
    await browser.pause(3000);
    let buttonContribute = await $('li [href="#contribute"]');
    await buttonContribute.click();
    await browser.pause(2000);
  })

  xit('should demonstrate click the button HELP', async () => {
    await helpPage.clickButton();
    await browser.pause(2000);
    let elem = await $('//*[contains(text(),"Browse Docs")]');
    let isDisplayed = await elem.isDisplayed();
    console.log("should isDisplayed: " + isDisplayed);
  })

  xit('should demonstrate click the button Versions', async () => {
    await versionsPage.clickButton();
    await browser.pause(2000);
    let buttonPastVersions = await $('li [href="#past-versions"]');
    await buttonPastVersions.click();
    await browser.pause(2000);
    let buttonDocumentationV5 = await $('[href="https://v5.webdriver.io/"]');
    await buttonDocumentationV5.click();
    await browser.pause(2000);
  })

})




