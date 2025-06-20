
describe('Search products', () => {
  it('should return products matching query', () => {
    cy.request('/products/search?q=phone').then((res) => {
      expect(res.status).to.eq(200)
      expect(res.body.products.length).to.be.greaterThan(0)
    })
  })

  it('should return empty array for gibberish query', () => {
    cy.request('/products/search?q=asdasdasd').then((res) => {
      expect(res.body.products).to.be.an('array').that.is.empty
    })
  })
})
