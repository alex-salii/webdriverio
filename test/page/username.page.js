class UsernameRandom {

  get nameInput() {
    return $('[id="login"]')
  }

  async addNameRandom() {
    let char = 'abcdefghijklmnopqrstuvwxyz';
    let username = '';
    for (let ii = 0; ii < 10; ii++) {
      username += char[Math.floor(Math.random() * char.length)];
    }
    console.log('should username: ' + username)
    await (await this.nameInput).addValue(username);
  }
}

module.exports = new UsernameRandom();