describe('App', () => {

  beforeEach(() => {
    browser.get('/');
  });

  it('should have <header>', () => {
    let subject = element(by.css('table')).isPresent();
    let result  = true;
    expect(subject).toEqual(result);
  });

});
