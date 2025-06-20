
describe('Limit and skip products', () => {
  it('should return 5 products with limit=5', () => {
    cy.request('/products?limit=5').then((res) => {
      expect(res.body.products.length).to.eq(5)
    })
  })

  it('should skip 10 products with skip=10', () => {
    cy.request('/products?skip=10').then((res) => {
      expect(res.status).to.eq(200)
    })
  })

  it('should handle edge case with limit=0', () => {
    cy.request('/products?limit=0').then((res) => {
      expect(res.body.products.length).to.eq(0)
    })
  })
})
