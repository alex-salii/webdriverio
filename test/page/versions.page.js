class VersionsPage {

  get nameButton() {
    return $('[href="/docs/versions.html"]')
  }

  async clickButton() {
    await (await this.nameButton).click();
  }
}

module.exports = new VersionsPage();