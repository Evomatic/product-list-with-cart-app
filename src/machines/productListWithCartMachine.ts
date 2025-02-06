// Increase/decrease the number of items in the cart
// See an order confirmation modal when they click "Confirm Order"
// Reset their selections when they click "Start New Order"
// See hover and focus states for all interactive elements on the page
import { createMachine } from "xstate";

export const productListWithCarMachine = createMachine({
  id: "productListWithCart",
  initial: "0",
  states: {
    Inactive: {
      on: { toggle: "Active" },
    },
    Active: {
      on: { toggle: "Inactive" },
    },
  },
});
