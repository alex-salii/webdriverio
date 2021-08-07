class SignInPage {

  get nameButton() {
    return $('[href="/login"]')
  }

  async clickButtonSignIn() {
    await (await this.nameButton).click();
  }
}

module.exports = new SignInPage();