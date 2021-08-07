class AddEmail {

  get nameInput() {
    return $('[id="login_field"]')
  }

  async addLoginEmail() {
    let loginEmail = 'awebdriver@gmail.com';
    await (await this.nameInput).addValue(loginEmail);
  }
}

module.exports = new AddEmail();