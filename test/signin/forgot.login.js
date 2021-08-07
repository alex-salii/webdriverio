class ForgotEmail {

  get nameInput() {
    return $('[id="email_field"]')
  }

  async ForgotAddEmail() {
    let loginEmail = 'awebdriver@gmail.com';
    await (await this.nameInput).addValue(loginEmail);
  }
}

module.exports = new ForgotEmail();