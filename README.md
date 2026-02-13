# alpha-testing

Repository for writing **custom functions** for Stripe’s soon-to-be-released billing script extension points. Clone this repo, implement your logic in the script folders, and run tests locally.

## Clone and setup

```bash
git clone <repository-url>
cd alpha-testing
npm install
```

## Where to write code

Custom logic lives in one **script folder** per extension point. Each folder has a single `index.ts` that you edit.

| Extension point | Folder | Implement in |
|-----------------|--------|----------------|
| Discount calculation | `src/discount_calculation/` | `src/discount_calculation/index.ts` |
| Prorations | `src/prorations/` | `src/prorations/index.ts` |
| Bill routing | `src/bill_routing/` | `src/bill_routing/index.ts` |
| Customer balance application | `src/customer_balance_application/` | `src/customer_balance_application/index.ts` |

Each `index.ts` exports a handler object (e.g. `discountCalculation`, `prorations`, `billRouting`, `customerBalanceApplication`) and an optional config type. Implement the function(s) in that file; the types and interfaces come from the `@stripe/scripts` package.

## Where to write tests

Tests are **co-located** with each script: one test file per script folder.

| Script folder | Test file |
|---------------|-----------|
| `src/discount_calculation/` | `src/discount_calculation/index.test.ts` |
| `src/prorations/` | `src/prorations/index.test.ts` |
| `src/bill_routing/` | `src/bill_routing/index.test.ts` |
| `src/customer_balance_application/` | `src/customer_balance_application/index.test.ts` |

Replace the placeholder `it.todo(...)` cases with real tests that call your handler and assert on the results. Use [Vitest](https://vitest.dev) (`describe`, `it`, `expect`) as in the root `src/index.test.ts`.

## Scripts

- **`npm run dev`** — Run `src/index.ts` with [tsx](https://github.com/privatenumber/tsx) (no build step).
- **`npm run build`** — Compile TypeScript to `dist/`.
- **`npm run test`** — Run tests once.
- **`npm run test:watch`** — Run tests in watch mode.
- **`npm start`** — Run the compiled `dist/index.js`.
