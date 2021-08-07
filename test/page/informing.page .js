class InformingPage {

  get nameInput() {
    return $('[id="opt_in"]')
  }

  async addSolution() {
    let value = 'n';
    await (await this.nameInput).addValue(value);
  }
}

module.exports = new InformingPage();