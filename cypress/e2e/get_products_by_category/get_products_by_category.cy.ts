
describe('Get products by category', () => {
  it('should return products in a valid category', () => {
    cy.request('/products/category/smartphones').then((res) => {
      expect(res.status).to.eq(200)
      expect(res.body.products).to.be.an('array')
    })
  })

  it('should return 404 for invalid category', () => {
    cy.request({
      url: '/products/category/unknown-category',
      failOnStatusCode: false
    }).then((res) => {
      expect(res.status).to.eq(404)
    })
  })
})
