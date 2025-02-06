import { createActor } from "xstate";
import { productListWithCarMachine } from "../machines/productListWithCartMachine";

describe("productListWithCarMachine", () => {
  it("it should start with 0 items", () => {
    const actor = createActor(productListWithCarMachine);
    actor.start();
    expect(actor.getSnapshot().context.count).toBe(0);
  });

  it("should increment item", () => {
    const actor = createActor(productListWithCarMachine);
    actor.start();
    actor.send({ type: "INCREMENT" });
    expect(actor.getSnapshot().context.count).toBe(1);
  });

  it("should decrement item", () => {
    const actor = createActor(productListWithCarMachine);
    actor.start();
    actor.send({ type: "INCREMENT" });
    actor.send({ type: "INCREMENT" });
    actor.send({ type: "DECREMENT" });
    expect(actor.getSnapshot().context.count).toBe(1);
  });
});
