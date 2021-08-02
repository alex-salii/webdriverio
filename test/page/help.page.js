class HelpPage {

  get nameButton() {
    return $('li [href="/help.html"]')
  }

  async clickButton() {
    await (await this.nameButton).click();
  }
}

module.exports = new HelpPage();