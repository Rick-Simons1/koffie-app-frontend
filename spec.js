
describe('login page tests', function () {
  it('should be on login page', function () {
    browser.get('http://localhost:4200/login')

    var currentUrl = browser.getCurrentUrl();
    expect(currentUrl).toEqual('http://localhost:4200/login');
  });

  it('should be on account page after login', function () {
    browser.get('http://localhost:4200/login');
    element(by.id('username')).sendKeys('admin');
    element(by.id('password')).sendKeys('password');
    element(by.id('loginButton')).click();



    var url = browser.getCurrentUrl();

    expect(url).toEqual('http://localhost:4200/account');
  });

  it('check if alert message is correct after wrong credentials', function () {
    
    browser.get('http://localhost:4200/login');
    element(by.id('username')).sendKeys('admin');
    element(by.id('password')).sendKeys('aa');
    element(by.id('loginButton')).click();

    var alertmessage = element(by.css('div.alert.alert-danger.alert-dismissable')).getText();

    expect(alertmessage).toContain('login credentials are wrong please try again');

  })

  it('username should be admin after loggin in with admin account', function () {
    browser.waitForAngularEnabled(true);
    browser.get('http://localhost:4200/login');
    element(by.id('username')).sendKeys('admin');
    element(by.id('password')).sendKeys('password');
    element(by.id('loginButton')).click();


    var el = element(by.id('username')).getText();

    expect(el).toEqual('admin');
  });


});

describe('coffee list tests', function () {
  it('coffee list button should redirect to coffee list page', function () {
    browser.waitForAngularEnabled(true);
    browser.get('http://localhost:4200/login');
    element(by.id('username')).sendKeys('admin');
    element(by.id('password')).sendKeys('password');
    element(by.id('loginButton')).click();
    element(by.id('coffeeList')).click();



    var el = browser.getCurrentUrl()

    expect(el).toEqual('http://localhost:4200/coffees');
  });

  it('edit button should redirect to edit coffee page', function () {
    browser.waitForAngularEnabled(true);
    browser.get('http://localhost:4200/login');
    element(by.id('username')).sendKeys('admin');
    element(by.id('password')).sendKeys('password');
    element(by.id('loginButton')).click();
    element(by.id('coffeeList')).click();
    element(by.id('edit')).click();




    var el = browser.getCurrentUrl()

    expect(el).toEqual('http://localhost:4200/editCoffee');
  });

  it('submit button should show succes msg', function () {
    browser.waitForAngularEnabled(true);
    browser.get('http://localhost:4200/login');
    element(by.id('username')).sendKeys('admin');
    element(by.id('password')).sendKeys('password');
    element(by.id('loginButton')).click();
    element(by.id('coffeeList')).click();
    element(by.id('edit')).click();
    element(by.id('submitForm')).click();

    var alertmessage = element(by.css('div.alert.alert-dismissable.alert-success')).getText();


    expect(alertmessage).toContain('succesfully changed the coffee');
  });

  it('if name already exists should show error message', function () {
    browser.waitForAngularEnabled(true);
    browser.get('http://localhost:4200/login');
    element(by.id('username')).sendKeys('admin');
    element(by.id('password')).sendKeys('password');
    element(by.id('loginButton')).click();
    element(by.id('coffeeList')).click();
    element(by.id('edit')).click();
    element(by.id('coffeeName')).clear().sendKeys('cappucino');
    element(by.id('submitForm')).click();

    var alertmessage = element(by.css('div.alert.alert-danger.alert-dismissable')).getText();


    expect(alertmessage).toContain('name already exists');
  });

  it('add coffee test error msg samename', function () {
    browser.waitForAngularEnabled(true);
    browser.get('http://localhost:4200/login');
    element(by.id('username')).sendKeys('admin');
    element(by.id('password')).sendKeys('password');
    element(by.id('loginButton')).click();
    element(by.id('addCoffee')).click();
    element(by.id('coffeeName')).sendKeys('cappucino');
    element(by.id('coffeeDescription')).sendKeys('test');
    element(by.id('coffeePrice')).sendKeys(1);
    element(by.id('submitForm')).click();

    var alertmessage = element(by.css('div.alert.alert-danger.alert-dismissable')).getText();


    expect(alertmessage).toContain('coffee name already exists');
  });

  it('add coffee and test succes msg', function () {
    browser.waitForAngularEnabled(true);
    browser.get('http://localhost:4200/login');
    element(by.id('username')).sendKeys('admin');
    element(by.id('password')).sendKeys('password');
    element(by.id('loginButton')).click();
    element(by.id('addCoffee')).click();
    element(by.id('coffeeName')).sendKeys('testcoffee');
    element(by.id('coffeeDescription')).sendKeys('test');
    element(by.id('coffeePrice')).sendKeys(1);
    element(by.id('submitForm')).click();

    var alertmessage = element(by.css('div.alert.alert-dismissable.alert-success')).getText();


    expect(alertmessage).toContain('succesfully added the coffee');
  });

  it('delete confirm should delete testcoffee', function () {
    browser.waitForAngularEnabled(true);
    browser.get('http://localhost:4200/login');
    element(by.id('username')).sendKeys('admin');
    element(by.id('password')).sendKeys('password');
    element(by.id('loginButton')).click();
    element(by.id('coffeeList')).click();
    var buttons = element.all(by.id('delete'));
    buttons.get(2).click();

   let alertDialog = browser.switchTo().alert();
   alertDialog.accept();

    var alertmessage = element(by.css('div.alert.alert-dismissable.alert-success')).getText();


    expect(alertmessage).toContain('succesfully deleted the coffee');
  });


});

describe('order coffee tests', function () {
  it('test add coffee', function () {
    browser.waitForAngularEnabled(true);
    browser.get('http://localhost:4200/login');
    element(by.id('username')).sendKeys('admin');
    element(by.id('password')).sendKeys('password');
    element(by.id('loginButton')).click();
    element(by.id('orderCoffee')).click();
    element(by.id('coffeeDialog')).click();
    browser.driver.sleep(1000);
    element(by.name('coffeeSelect')).click();
    element(by.id('milk')).sendKeys(1);
    element(by.id('sugar')).sendKeys(1);
    element(by.id('selectButton')).click();
    browser.driver.sleep(1000);
    element(by.id('makeOrder')).click();

    var text = element(by.id('coffeeName')).getText()

    expect(text).toEqual('espresso');

  });

});
