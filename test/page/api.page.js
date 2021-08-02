class ApiPage {

  get nameButton() {
    return $('li [href="/docs/api.html"]')
  }

  async clickButton() {
    await (await this.nameButton).click();
  }
}

module.exports = new ApiPage();