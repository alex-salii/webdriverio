class SignUpPage {

  get nameButton() {
    return $('[class="HeaderMenu-link flex-shrink-0 d-inline-block no-underline border color-border-tertiary rounded px-2 py-1"]')
  }

  async clickButtonSign() {
    await (await this.nameButton).click();
  }
}

module.exports = new SignUpPage();