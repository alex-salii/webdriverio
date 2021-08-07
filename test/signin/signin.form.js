class SignInForm {

  get nameButton() {
    return $('[class="btn btn-primary btn-block"]')
  }

  async clickSignInForm() {
    await (await this.nameButton).click();
  }
}

module.exports = new SignInForm();