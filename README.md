# Enterprise Playwright Automation Framework

## Overview

This project demonstrates an Enterprise-grade Playwright Automation Framework developed for the React Shopping Cart Demo application.

The framework is designed following industry best practices with a focus on scalability, maintainability, reusability, and CI/CD readiness.

---

## Technology Stack

- Playwright
- JavaScript
- Node.js
- Azure DevOps Pipelines
- GitHub
- Page Object Model (POM)

---

## Project Structure

```
Project
│
├── base
│   └── BasePage.js
│
├── config
│   ├── env.ts
│   ├── .env.qa
│   ├── .env.uat
│   └── .env.prod
│
├── pages
│   ├── HomePage.js
│   └── CartPage.js
│
├── tests
│   └── ProductPriceValidation.spec.js
│
├── testData
│   └── productData.json
│
├── utils
│
├── azure-pipelines.yml
├── playwright.config.ts
├── package.json
└── README.md
```

---

## Framework Features

- Enterprise Page Object Model (POM)
- Reusable BasePage
- Externalized JSON Test Data
- Multi-Environment Support
- Configuration Driven Execution
- Azure DevOps CI/CD Integration
- HTML Reports
- JUnit Reports
- Screenshot Capture
- Video Recording
- Trace Collection
- GitHub Integration

---

## Test Scenario

The automated test performs the following validations:

- Navigate to the application
- Identify all products priced at the configured target price
- Add matching products to the cart
- Validate:
  - Product Name
  - Product Price
  - Quantity
  - Cart Count
  - Grand Total

---

## Multi-Environment Execution

Supported environments:

- QA
- UAT
- PROD

Run against QA

```bash
$env:TEST_ENV="qa"
npx playwright test
```

Run against UAT

```bash
$env:TEST_ENV="uat"
npx playwright test
```

Run against PROD

```bash
$env:TEST_ENV="prod"
npx playwright test
```

---

## Run Tests

Install dependencies

```bash
npm install
```

Install Playwright browsers

```bash
npx playwright install
```

Execute tests

```bash
npx playwright test
```

Open HTML Report

```bash
npx playwright show-report
```

---

## Azure DevOps Pipeline

The project includes an Azure DevOps YAML pipeline that performs:

- Source Checkout
- Node.js Installation
- Dependency Installation
- Playwright Browser Installation
- Test Execution
- HTML Report Publishing
- JUnit Report Publishing
- Artifact Publishing

---

## Reporting

The framework generates:

- HTML Report
- JUnit Report
- Screenshots
- Videos
- Trace Files

---

## Design Principles

- Page Object Model (POM)
- Reusable Components
- Separation of Concerns
- Configuration Driven Design
- Maintainable Architecture
- Scalable Framework
- CI/CD Ready

---
---Pipeline successfully executed ---
<img width="1475" height="383" alt="image" src="https://github.com/user-attachments/assets/1c411f19-cd1f-4968-bc47-ae07253a3237" />


## Author

**Praveen Prakash**

Principal Engineer – Digital Assurance
