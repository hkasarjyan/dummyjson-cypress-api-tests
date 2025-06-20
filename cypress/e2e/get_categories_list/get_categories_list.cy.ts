interface Category {
  slug: string;
  name: string;
  url: string;
}

describe('GET /products/categories', () => {
  //Positive case: basic response check
  it('should return 200 and an array of category objects', () => {
    cy.request('/products/categories').then((res) => {
      expect(res.status).to.eq(200);
      expect(res.body).to.be.an('array');
      res.body.forEach((item: Category) => {
        expect(item).to.have.all.keys('slug', 'name', 'url');
      });
    });
  });

  //Validate unique slugs and urls
  it('should contain unique slugs and urls', () => {
    cy.request('/products/categories').then((res) => {
      const slugs = res.body.map((cat: Category) => cat.slug);
      const urls = res.body.map((cat: Category) => cat.url);
      const uniqueSlugs = new Set(slugs);
      const uniqueUrls = new Set(urls);
      expect(uniqueSlugs.size).to.eq(slugs.length);
      expect(uniqueUrls.size).to.eq(urls.length);
    });
  });

  //Validate slug is URL-safe and matches end of URL
  it('slug should match URL suffix', () => {
    cy.request('/products/categories').then((res) => {
      res.body.forEach((cat: Category) => {
        expect(cat.url.endsWith(`/products/category/${cat.slug}`)).to.be.true;
      });
    });
  });

  //Validate all fields are non-empty strings
  it('fields should be non-empty strings', () => {
    cy.request('/products/categories').then((res) => {
      res.body.forEach((cat: Category) => {
        expect(cat.slug).to.be.a('string').and.not.be.empty;
        expect(cat.name).to.be.a('string').and.not.be.empty;
        expect(cat.url).to.be.a('string').and.not.be.empty;
      });
    });
  });

  //Negative test: invalid method (PUT)
  it('should not allow PUT method', () => {
    cy.request({
      method: 'PUT',
      url: '/products/categories',
      failOnStatusCode: false
    }).then((res) => {
      expect(res.status).to.eq(404);
    });
  });

  //Edge case: query params should be ignored
  it('should ignore query params and return the same categories', () => {
    cy.request('/products/categories').then((original) => {
      cy.request('/products/categories?extra=true').then((withParam) => {
        expect(withParam.status).to.eq(200);
        expect(withParam.body).to.deep.equal(original.body);
      });
    });
  });
});
