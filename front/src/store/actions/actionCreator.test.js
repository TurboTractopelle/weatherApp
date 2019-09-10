import actionCreator from "./actionCreator";

describe("actionCreate", () => {
  it("creates an action", () => {
    const action = actionCreator("A", "payload", "stuff");
    const launchedAction = action(5);
    expect(launchedAction.type).toBe("A");
    expect(launchedAction.payload).toBe(5);
    expect(launchedAction.stuff).toBe(undefined);
  });
});
