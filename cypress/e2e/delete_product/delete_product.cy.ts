
let productToDeleteId = 2;

describe('Delete product', () => {
  it('should delete a product successfully', () => {
    cy.request('DELETE', `/products/${productToDeleteId}`).then((res) => {
      expect(res.status).to.eq(200)
      expect(res.body.id).to.eq(productToDeleteId)
    })
  })

  it('should return 404 when deleting again', () => {
    // BUG: API returns 200 when deleting already removed product
    cy.request({
      method: 'DELETE',
      url: `/products/${productToDeleteId}`,
      failOnStatusCode: false
    }).then((res) => {
      expect(res.status).to.eq(404)
    })
  })

})
