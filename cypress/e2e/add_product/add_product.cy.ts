let createdProductId: number;

describe('Add new product', () => {
  it('should successfully add a product', () => {
    cy.request('POST', '/products/add', {
      title: 'Test Product',
      price: 123,
      description: 'Testing...',
      category: 'smartphones'
    }).then((res) => {
      expect(res.status).to.eq(201)
      expect(res.body).to.have.property('id')
      createdProductId = res.body.id;
    })
  })
})

describe('Add new product - More test cases', () => {
  it('should fail when required field is missing', () => {
    // BUG: API returns 201 when there are missing fields in creating API
    cy.request({
      method: 'POST',
      url: '/products/add',
      body: {
        // Missing title
        price: 123
      },
      failOnStatusCode: false
    }).then((res) => {
      expect(res.status).to.not.eq(201)
    })
  })

  it('should fail with invalid data types', () => {
    // BUG: API returns 201 with not valid input types
    cy.request({
      method: 'POST',
      url: '/products/add',
      body: {
        title: 12345,  // should be string
        price: "cheap" // should be number
      },
      failOnStatusCode: false
    }).then((res) => {
      expect(res.status).to.not.eq(201)
    })
  })

  it('should add product with extra optional fields', () => {
    cy.request('POST', '/products/add', {
      title: 'Extended Product',
      price: 99,
      description: 'Includes optional fields',
      category: 'laptops',
      rating: 4.5,
      stock: 50,
      brand: 'Cypress',
      discountPercentage: 5
    }).then((res) => {
      expect(res.status).to.eq(201)
      expect(res.body).to.have.property('id')
      expect(res.body.title).to.eq('Extended Product')
    })
  })

  it('should add multiple products sequentially', () => {
    const titles = ['Batch 1', 'Batch 2', 'Batch 3']
    titles.forEach((title) => {
      cy.request('POST', '/products/add', {
        title,
        price: 10
      }).then((res) => {
        expect(res.status).to.eq(201)
        expect(res.body.title).to.eq(title)
      })
    })
  })
})
