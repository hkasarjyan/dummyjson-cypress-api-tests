
describe('GET all products', () => {
  it('should return a list of products', () => {
    cy.request('/products').then((res) => {
      expect(res.status).to.eq(200)
      expect(res.body.products).to.be.an('array')
    })
  })

  it('should return total and limit fields', () => {
    cy.request('/products').then((res) => {
      expect(res.body).to.have.property('total')
      expect(res.body).to.have.property('limit')
    })
  })
})
