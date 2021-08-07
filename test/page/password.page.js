class PasswordRandom {

  get nameInput() {
    return $('[id="password"]')
  }

  async addPasswordRandom() {
    let char = 'abcdefghijklmnopqrstuvwxyz1234567890@#$';
    let password = '';
    for (let ii = 0; ii < 15; ii++) {
      password += char[Math.floor(Math.random() * char.length)];
    }
    console.log('should password: ' + password)
    await (await this.nameInput).addValue(password);
  }
}

module.exports = new PasswordRandom();