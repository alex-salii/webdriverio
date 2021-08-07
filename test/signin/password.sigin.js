class AddPassword {

  get nameInput() {
    return $('[id="password"]')
  }

  async addPasswordInput() {
    let password = 'awebdriver123';
    await (await this.nameInput).addValue(password);
  }
}

module.exports = new AddPassword();