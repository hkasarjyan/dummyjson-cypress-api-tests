# DummyJSON Cypress API Tests

This repository contains a complete API testing framework using **Cypress** and **TypeScript** for validating the [DummyJSON Product API](https://dummyjson.com/docs/products).

> Git repository: [`git@github.com:hkasarjyan/dummyjson-cypress-api-tests.git`](https://github.com/hkasarjyan/dummyjson-cypress-api-tests)

---

## 📦 Project Structure

```
dummyjson-cypress-api-tests/
├── cypress/
│   ├── e2e/
│   │   ├── add_product/
│   │   ├── delete_product/
│   │   ├── get_all_categories/
│   │   ├── get_all_products/
│   │   ├── get_products_by_category/
│   │   ├── get_single_product/
│   │   ├── limit_and_skip_products/
│   │   ├── search_products/
│   │   ├── sort_products/
│   │   ├── update_product/
│   └── support/
│       └── e2e.ts
├── cypress.config.js
├── tsconfig.json
├── package.json
└── README.md
```

---

## ✅ What’s Covered

### 🔹 `GET` Endpoints
- All products
- Single product
- Search
- Filter by limit & skip
- Product categories
- Products by category

### 🔹 `POST / PUT / DELETE`
- Add a new product with validation
- Update a product and verify
- Delete product and confirm removal

---

## 🛠 Setup & Installation

1. **Clone the repository**
   ```bash
   git clone git@github.com:hkasarjyan/dummyjson-cypress-api-tests.git
   cd dummyjson-cypress-api-tests
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run tests**
   - In **headless** mode:
     ```bash
     npx cypress run
     ```
   - In **interactive** mode:
     ```bash
     npx cypress open
     ```

---

## 📊 Reporting (Mochawesome)

This project uses **Mochawesome** for clean HTML test reports.

### 📦 Install (already included if you ran `npm install`)
```bash
npm install --save-dev mochawesome mochawesome-merge mochawesome-report-generator cypress-mochawesome-reporter
```

### 🔧 Configuration

- Reporter setup is done in `cypress.config.js`
- Registration is included in `cypress/support/e2e.ts`

### 📄 After test run, report output:
```
cypress/reports/mochawesome-report/mochawesome.html
```

You can open this file in any browser to view full test results with summaries, errors, and test details.

---

## 🧪 Technology Stack

- [Cypress](https://www.cypress.io/) for API automation
- TypeScript for type safety
- Mochawesome for reporting
- Node.js for execution
- Custom folder-per-endpoint test organization

---