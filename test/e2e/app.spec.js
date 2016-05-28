describe("roadtripAppapp", function() {
  it("should get home page title", function() {
    browser.get('/');
    expect(browser.getTitle()).toEqual("USA Road Trip Summer 2016");
  });
});
