class MainPage {

  get searchInput() {
    return $('#search_input_react');
  }

  async setUserName(value) {
    await (await this.searchInput).addValue(value);
  }
}

module.exports = new MainPage();