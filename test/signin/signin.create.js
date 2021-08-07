class CreateUser {


  get pricingHover() { return $('//summary[contains(text(),"Pricing")]') }
  get exploreHover() { return $('//summary[contains(text(),"Explore")]') }
  get plansLink() { return $('[class="pb-2 lh-condensed-ultra d-block Link--primary no-underline h5 Bump-link--hover"]') }
  get exploreLink() { return $('li [href="/explore"]') }
  get topicsLink() { return $('[data-selected-links="topics_path /topics/ /topics"]') }
  get joinFoFreeLink() { return $(' [class= "d-block btn-mktg btn-outline-mktg"]') }
  get userNameInput() { return $('[id="user_login"]')}
  get EmailInput() { return $('[id="user_email"]') }
  get passwordInput() { return $('[id="user_password"]') }
  get checkboxEmail() { return $('[id = "all_emails"]') }

  get inputGit() { return $('[class="form-control input-sm header-search-wrapper p-0 js-chromeless-input-container header-search-wrapper-jump-to position-relative d-flex flex-justify-between flex-items-center"]')}

  get buttonAllClick() { return $('[class="js-jump-to-badge-search-text-global"]') }
  get buttonTypeScript() { return $('[href="/search?l=TypeScript&q=webdriverio&type=Repositories"]')}
  get linkWebdriver() { return $('[href="/webdriverio/webdriverio"]') }

  get linkCareers() { return $('[href="/about/careers"]')}
  get linkOpenPosition() { return $('[href="#positions"]')}
  get textAttribute() { return $('[class="js-details-target d-block width-full btn-link text-normal Link--muted"]') }

  get labelBusinessSystems() { return $('//*[contains(text(),"Business Systems")]') }
  get labelCustomerSuccess() { return $('//h3[contains(text(),"Customer Success")]') }
  get labelDesign() { return $('//*[contains(text(),"//h3[contains(text(),"Design")]")]')}


  async getBusinessSystems() {
    await (await this.labelBusinessSystems).getText();
  }
  async getCustomerSuccess() {
    await (await this.labelCustomerSuccess).getText();
  }
  async getDesign() {
    await (await this.labelDesign).getText();
  }



 
  async getTextLabel() {
    await (await this.textAttribute).getText();
  }


  async addValueInput() {
    await (await this.inputGit).addValue('webdriverio');
  }

  async clickInput() {
    await (await this.inputGit).click();
  }

  async topicsIsDisplayed() {
    let topicsTitle = await $('//h1[contains(text(),"Topics")]');
    let isDisplayedText = await topicsTitle.isDisplayed();
    console.log("should isDisplayedText: " + isDisplayedText);
  }


  async clickCheckboxEmail() {
    await (await this.checkboxEmail).click();
  }

  async addPassword() {
    let char = 'abcdefghijklmnopqrstuvwxyz1234567890';
    let string = '';
    for (let ii = 0; ii < 15; ii++) {
      string += char[Math.floor(Math.random() * char.length)];
    }
    await (await this.passwordInput).addValue(string);
  }

  async addEmail() {
    let char = 'abcdefghijklmnopqrstuvwxyz1234567890';
    let string = '';
    for (let ii = 0; ii < 15; ii++) {
      string += char[Math.floor(Math.random() * char.length)];
    }
    let value = (string + '@gmail.com');
    console.log('should email: ' + value)
    await (await this.EmailInput).addValue(value);
  }

  async addUserName() {
    let char = 'abcdefghijklmnopqrstuvwxyz';
    let value = '';
    for (let ii = 0; ii < 10; ii++) {
      value += char[Math.floor(Math.random() * char.length)];
    }
    await (await this.userNameInput).addValue(value);
  }

  async clickLinkOpenPosition() {
    await (await this.linkOpenPosition).click();
  }

  async clickLinkCareers() {
    await (await this.linkCareers).click();
  }

  async clickLinkWebdriver() {
    await (await this.linkWebdriver).click();
  }

  async clickTypeScript() {
    await (await this.buttonTypeScript).click();
  }

  async clickAllGitHub() {
    await (await this.buttonAllClick).click();
  }

  async clickJoinFoFreeLink() {
    await (await this.joinFoFreeLink).click();
  }

  async clickPlansLink() {
    await (await this.plansLink).click();
  }

  async clickExploreGitLink() {
    await (await this.exploreLink).click();
  }

  async clickTopicsLink() {
    await (await this.topicsLink).click();
  }


  async functionHoverPricing() {
    await (await this.pricingHover).moveTo();
  }
  
  async functionHoverExplore() {
    await (await this.exploreHover).moveTo();
  }
}

module.exports = new CreateUser();