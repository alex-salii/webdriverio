class EmailRandom {

  get nameInput() {
    return $('[id="email"]')
  }

  async addEmailRandom() {
    let char = 'abcdefghijklmnopqrstuvwxyz1234567890';
    let string = '';
    for (let ii = 0; ii < 15; ii++) {
      string += char[Math.floor(Math.random() * char.length)];
    }
    let value = (string + '@gmail.com');
    console.log('should email: ' + value)
    await (await this.nameInput).addValue(value);
  }
}

module.exports = new EmailRandom();