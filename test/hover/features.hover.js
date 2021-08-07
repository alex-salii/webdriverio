class FeaturesHover {

  get nameLink() {
    return $('//summary[contains(text(),"Why GitHub?")]')
  }

  async hoverFeatures() {
    await (await this.nameLink).moveTo();
  }
}

module.exports = new FeaturesHover();