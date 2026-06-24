# Shopping Cart Demo Test Plan

## Application Overview

The React Shopping Cart Demo is a browser-based e-commerce prototype hosted at https://react-shopping-cart-67954.firebaseapp.com. The app presents a catalog of 16 products with price and size details, and enables cart operations including add/remove, quantity updates, subtotal calculations, filters, and session persistence.

## Test Scenarios

### 1. Shopping Cart Demo QA Suite

**Seed:** `tests/one.spec.ts`

#### 1.1. Verify product listing count

**File:** `Shopping_Cart_Demo_Test_Plan.md`

**Steps:**
  1. -
    - expect: The page loads and displays product count text

#### 1.2. Validate product price format

**File:** `Shopping_Cart_Demo_Test_Plan.md`

**Steps:**
  1. -
    - expect: Each product shows a valid price format beginning with $

#### 1.3. Add a single product to cart

**File:** `Shopping_Cart_Demo_Test_Plan.md`

**Steps:**
  1. -
    - expect: Cart updates with one item after clicking Add to cart

#### 1.4. Validate cart badge updates

**File:** `Shopping_Cart_Demo_Test_Plan.md`

**Steps:**
  1. -
    - expect: Cart badge increments correctly for each Add to cart action

#### 1.5. Open cart after adding item

**File:** `Shopping_Cart_Demo_Test_Plan.md`

**Steps:**
  1. -
    - expect: The selected product appears in the cart panel after add

#### 1.6. Increase cart quantity

**File:** `Shopping_Cart_Demo_Test_Plan.md`

**Steps:**
  1. -
    - expect: Quantity increments and subtotal updates when + is clicked

#### 1.7. Decrease cart quantity

**File:** `Shopping_Cart_Demo_Test_Plan.md`

**Steps:**
  1. -
    - expect: Quantity decrements and subtotal updates when - is clicked

#### 1.8. Remove a product from cart

**File:** `Shopping_Cart_Demo_Test_Plan.md`

**Steps:**
  1. -
    - expect: Product removed from cart and cart count updates

#### 1.9. Validate cart subtotal

**File:** `Shopping_Cart_Demo_Test_Plan.md`

**Steps:**
  1. -
    - expect: Subtotal equals unit price times quantity

#### 1.10. Add multiple products

**File:** `Shopping_Cart_Demo_Test_Plan.md`

**Steps:**
  1. -
    - expect: Multiple products added and subtotal calculated correctly

#### 1.11. Filter by XS

**File:** `Shopping_Cart_Demo_Test_Plan.md`

**Steps:**
  1. -
    - expect: Product list updates when XS filter is applied

#### 1.12. Filter by S

**File:** `Shopping_Cart_Demo_Test_Plan.md`

**Steps:**
  1. -
    - expect: Product list updates when S filter is applied

#### 1.13. Filter by M

**File:** `Shopping_Cart_Demo_Test_Plan.md`

**Steps:**
  1. -
    - expect: Product list updates when M filter is applied

#### 1.14. Filter by ML

**File:** `Shopping_Cart_Demo_Test_Plan.md`

**Steps:**
  1. -
    - expect: Product list updates when ML filter is applied

#### 1.15. Filter by L

**File:** `Shopping_Cart_Demo_Test_Plan.md`

**Steps:**
  1. -
    - expect: Product list updates when L filter is applied

#### 1.16. Filter by XL

**File:** `Shopping_Cart_Demo_Test_Plan.md`

**Steps:**
  1. -
    - expect: Product list updates when XL filter is applied

#### 1.17. Filter by XXL

**File:** `Shopping_Cart_Demo_Test_Plan.md`

**Steps:**
  1. -
    - expect: Product list updates when XXL filter is applied

#### 1.18. Cart persistence during session

**File:** `Shopping_Cart_Demo_Test_Plan.md`

**Steps:**
  1. -
    - expect: Cart persists after refresh within the same browser session

#### 1.19. Add filtered item to cart

**File:** `Shopping_Cart_Demo_Test_Plan.md`

**Steps:**
  1. -
    - expect: Filtered item can be added to cart correctly

#### 1.20. Clear filter and restore full list

**File:** `Shopping_Cart_Demo_Test_Plan.md`

**Steps:**
  1. -
    - expect: Clearing a filter restores the full product list

#### 1.21. Verify quantity lower boundary

**File:** `Shopping_Cart_Demo_Test_Plan.md`

**Steps:**
  1. -
    - expect: Cart quantity does not drop below minimum allowed

#### 1.22. Cart summary consistency

**File:** `Shopping_Cart_Demo_Test_Plan.md`

**Steps:**
  1. -
    - expect: Cart item totals match the displayed subtotal

#### 1.23. Checkout button visibility

**File:** `Shopping_Cart_Demo_Test_Plan.md`

**Steps:**
  1. -
    - expect: Checkout button is visible after adding items

#### 1.24. Validate combined subtotal

**File:** `Shopping_Cart_Demo_Test_Plan.md`

**Steps:**
  1. -
    - expect: Combined subtotal matches the sum of item totals

#### 1.25. Add same item twice

**File:** `Shopping_Cart_Demo_Test_Plan.md`

**Steps:**
  1. -
    - expect: Adding same product twice updates quantity or item count correctly
