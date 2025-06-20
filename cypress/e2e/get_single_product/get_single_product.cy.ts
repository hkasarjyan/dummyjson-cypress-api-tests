
describe('GET single product', () => {
  it('should return a valid product by ID', () => {
    cy.request('/products/1').then((res) => {
      expect(res.status).to.eq(200)
      expect(res.body.id).to.eq(1)
    })
  })

  it('should return 404 for non-existent product', () => {
    cy.request({
      url: '/products/999999',
      failOnStatusCode: false
    }).then((res) => {
      expect(res.status).to.eq(404)
    })
  })

  it('should return 400 for invalid ID', () => {
    // BUG: API returns 404 for invalid type, should return 400
    cy.request({
      url: '/products/abc',
      failOnStatusCode: false
    }).then((res) => {
      expect(res.status).to.eq(400)
    })
  })
})
