describe('GET /products/categories', () => {
  it('should return a list of categories', () => {
    cy.request('/products/categories').then((res) => {
      expect(res.status).to.eq(200)
      expect(res.body).to.be.an('array')
      expect(res.body.length).to.be.greaterThan(0)
    })
  })


  // Negative Case: Wrong method (POST instead of GET)
  it('should return 404 on POST request to categories', () => {
    cy.request({
      method: 'POST',
      url: '/products/categories',
      failOnStatusCode: false
    }).then((res) => {
      expect(res.status).to.eq(404)
    })
  })

  // Negative Case: Add query param (should still work or be ignored)
  it('should ignore invalid query params', () => {
    cy.request('/products/categories?foo=bar').then((res) => {
      expect(res.status).to.eq(200)
      expect(res.body).to.be.an('array')
    })
  })
})
