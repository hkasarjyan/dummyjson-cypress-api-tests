describe('Update product and validate', () => {
  const productId = 1; 
  const updatedTitle = 'Updated Product Title by Cypress';
  const updatedDescription = 'Updated description by Cypress';

  it('should update the product successfully', () => {
    cy.request('PUT', `/products/${productId}`, {
      title: updatedTitle,
      description: updatedDescription
    }).then((res) => {
      expect(res.status).to.eq(200);
      expect(res.body.id).to.eq(productId);
      expect(res.body.title).to.eq(updatedTitle);
      expect(res.body.description).to.eq(updatedDescription);
    });
  });

  it('should retrieve the updated product and validate fields', () => {
    // BUG: API does not update the product, it mimics the update. 
    cy.request(`/products/${productId}`).then((res) => {
      expect(res.status).to.eq(200);
      expect(res.body.id).to.eq(productId);
      expect(res.body.title).to.eq(updatedTitle);
      expect(res.body.description).to.eq(updatedDescription);
    });
  });
});
