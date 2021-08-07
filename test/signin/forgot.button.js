class ForgotButton {

  get nameButton() {
    return $('[class="label-link position-absolute top-0 right-0"]')
  }

  async clickForgotPass() {
    await (await this.nameButton).click();
  }
}

module.exports = new ForgotButton();