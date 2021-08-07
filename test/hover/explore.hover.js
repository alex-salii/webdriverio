class ExploreHover {

  get nameLink() {
    return $('//summary[contains(text(),"Explore")]')
  }

  async hoverExplore() {
    await (await this.nameLink).moveTo();
  }
}

module.exports = new ExploreHover();