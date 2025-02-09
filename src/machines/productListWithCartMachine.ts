// Increase/decrease the number of items in the cart
// See an order confirmation modal when they click "Confirm Order"
// Reset their selections when they click "Start New Order"
// See hover and focus states for all interactive elements on the page
import { createMachine, assign } from "xstate";

export const productListWithCartMachine = createMachine({
  id: "productListWithCart",
  context: {
    count: 0,
  },
  on: {
    INCREMENT: {
      actions: assign({
        count: ({ context }) => context.count + 1,
      }),
    },
    DECREMENT: {
      actions: assign({
        count: ({ context }) => context.count - 1,
      }),
    },
  },
});
