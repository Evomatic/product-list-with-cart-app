// machine test
// Test: increment
// Test: decrement

// dom test
// confirm modal should pop up
import { createActor } from "xstate";
import { productListWithCartMachine } from "../machines/productListWithCartMachine";

describe("productListWithCartMachine", () => {
  it("should increment item.", () => {
    const actor = createActor(productListWithCartMachine);
    actor.start();
    actor.send({ type: "INCREMENT" });
    expect(actor.getSnapshot().context.count).toBe(1);
  });

  it("should decrement item.", () => {
    const actor = createActor(productListWithCartMachine);
    actor.start();
    actor.send({ type: "INCREMENT" });
    actor.send({ type: "INCREMENT" });
    actor.send({ type: "DECREMENT" });
    expect(actor.getSnapshot().context.count).toBe(1);
  });
});

describe("Confirmation modal", () => {
  it("Modal should appear after confirm order.", () => {});
});
