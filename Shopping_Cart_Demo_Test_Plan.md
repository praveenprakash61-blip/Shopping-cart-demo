# Shopping Cart Demo Test Plan

## Application Overview

This plan covers functional verification, negative scenarios, exploratory checks, boundary and edge cases, and end-to-end cart journeys for the React Shopping Cart Demo. Scenarios assume a blank browser state unless otherwise stated.

## Test Scenarios

### 1. Functional Scenarios

**Seed:** `tests/seed.spec.ts`

#### 1.1. Add a single product and verify cart update

**File:** `tests/functional/add-single-product.spec.ts`

**Steps:**
  1. Open the application from a fresh state and select a visible product.
    - expect: The product card is displayed with an Add to cart control.
    - expect: Clicking Add to cart updates the cart badge and opens the cart state.
  2. Open the cart panel and inspect the newly added item.
    - expect: The selected product appears in the cart.
    - expect: The quantity is shown as 1.
    - expect: The displayed subtotal matches the item price.

#### 1.2. Filter products by size and add a matching item

**File:** `tests/functional/filter-and-add.spec.ts`

**Steps:**
  1. Apply a size filter such as M or XL.
    - expect: Only products matching the selected size remain visible.
    - expect: The visible count changes accordingly.
  2. Add one of the filtered products to the cart.
    - expect: The chosen product appears in the cart with the expected price.
    - expect: The cart count increases by one.

#### 1.3. Adjust quantity and verify subtotal recalculation

**File:** `tests/functional/quantity-and-subtotal.spec.ts`

**Steps:**
  1. Add a product to the cart and open the cart panel.
    - expect: The item is present with quantity 1.
  2. Increase the quantity using the plus control and later decrease it using the minus control.
    - expect: The quantity changes correctly after each action.
    - expect: The subtotal updates to reflect the new quantity.

### 2. Negative Scenarios

**Seed:** `tests/seed.spec.ts`

#### 2.1. Handle duplicate add actions gracefully

**File:** `tests/negative/duplicate-add.spec.ts`

**Steps:**
  1. Add the same product to the cart several times in quick succession.
    - expect: The cart remains consistent and does not break.
    - expect: The quantity and total update correctly without duplicate malformed entries.

#### 2.2. Remove the last item from the cart

**File:** `tests/negative/remove-last-item.spec.ts`

**Steps:**
  1. Add one product to the cart and remove it immediately.
    - expect: The cart returns to an empty state.
    - expect: No broken or stale cart detail remains visible.

#### 2.3. Recover from no-match filter state

**File:** `tests/negative/no-match-filter.spec.ts`

**Steps:**
  1. Apply a filter that matches no visible products and then clear it.
    - expect: The application handles the no-match state without crashing.
    - expect: Clearing the filter restores the full product list.

### 3. Exploratory Scenarios

**Seed:** `tests/seed.spec.ts`

#### 3.1. Explore cart panel interaction flows

**File:** `tests/exploratory/cart-panel-flow.spec.ts`

**Steps:**
  1. Open and close the cart panel repeatedly while changing cart contents.
    - expect: The cart panel opens and closes smoothly.
    - expect: The displayed content remains accurate after each interaction.
  2. Refresh the page after interacting with the cart.
    - expect: The cart state remains reasonable and consistent with the last action.

#### 3.2. Check responsive behavior on a small viewport

**File:** `tests/exploratory/mobile-responsiveness.spec.ts`

**Steps:**
  1. Resize the browser to a narrow viewport and browse the catalog.
    - expect: Products remain readable and usable.
    - expect: Buttons and cart controls stay reachable and do not overlap.

#### 3.3. Exercise keyboard-only navigation

**File:** `tests/exploratory/keyboard-navigation.spec.ts`

**Steps:**
  1. Move through interactive elements using the keyboard only.
    - expect: Focus is visible and moves in a sensible order.
    - expect: Primary actions such as Add to cart and quantity controls can be triggered.

### 4. Boundary Scenarios

**Seed:** `tests/seed.spec.ts`

#### 4.1. Validate quantity lower boundary

**File:** `tests/boundary/quantity-lower-boundary.spec.ts`

**Steps:**
  1. Add a product and attempt to reduce its quantity to the minimum allowed value.
    - expect: The quantity does not go below the supported minimum.
    - expect: The cart remains valid and shows no negative quantity.

#### 4.2. Validate large cart contents

**File:** `tests/boundary/large-cart.spec.ts`

**Steps:**
  1. Add a large number of products from different categories.
    - expect: The cart count and total remain accurate.
    - expect: The layout remains responsive and readable.

#### 4.3. Validate empty cart state

**File:** `tests/boundary/empty-cart-state.spec.ts`

**Steps:**
  1. Start with an empty cart and inspect available actions.
    - expect: The cart displays an empty state.
    - expect: Checkout is not available or is not actionable until items are added.

### 5. Edge-Case Scenarios

**Seed:** `tests/seed.spec.ts`

#### 5.1. Add the same product repeatedly

**File:** `tests/edge-case/repeat-product.spec.ts`

**Steps:**
  1. Add the same product multiple times and inspect the result.
    - expect: The cart updates in a predictable way.
    - expect: The item count or quantity reflects the repeated actions correctly.

#### 5.2. Mix products with different prices

**File:** `tests/edge-case/mixed-prices.spec.ts`

**Steps:**
  1. Add products with different price points to the cart.
    - expect: Each item retains its correct price.
    - expect: The subtotal reflects the sum of all items accurately.

#### 5.3. Clear filters after applying one

**File:** `tests/edge-case/clear-filter.spec.ts`

**Steps:**
  1. Apply a size filter, then clear it and inspect the product list.
    - expect: The filtered list is restored correctly.
    - expect: The full catalog reappears without stale filters.

### 6. End-to-End Scenarios

**Seed:** `tests/seed.spec.ts`

#### 6.1. Complete a browsing-to-checkout journey

**File:** `tests/e2e/complete-purchase-journey.spec.ts`

**Steps:**
  1. Browse the catalog, apply a size filter, add several products, and adjust quantities.
    - expect: The cart reflects the selected items and current quantities.
    - expect: The subtotal and cart count remain accurate throughout the flow.
  2. Review the final cart contents before checkout.
    - expect: All chosen products, quantities, and totals are correct.
    - expect: The checkout action is available and consistent with the cart state.

#### 6.2. Verify persistence across refresh and return navigation

**File:** `tests/e2e/persistence-across-refresh.spec.ts`

**Steps:**
  1. Add items to the cart, refresh the page, and navigate away and back if the app allows it.
    - expect: The cart state remains consistent with the last interaction.
    - expect: No items are lost unexpectedly or duplicated.
