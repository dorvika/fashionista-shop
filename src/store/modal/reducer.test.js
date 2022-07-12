import reducer from "./reducer";

describe("products reducer", () => {
  const state = {
    isOpen: false,
    content: null,
    action: null,
    product: {},
    deleteTotallyFlag: false,
  };

  it("should return default value", () => {
    expect(reducer(undefined, {})).toEqual(state);
  });
  describe("for OPEN_MODAL action", () => {
    it("should return state with passed values", () => {
      expect(
        reducer(state, {
          type: "OPEN_MODAL",
          payload: {
            content: "content",
            action: "add",
            product: { sku: 10001, name: "Dress" },
            deleteTotallyFlag: false,
          },
        })
      ).toEqual({
        isOpen: true,
        content: "content",
        action: "add",
        product: { sku: 10001, name: "Dress" },
        deleteTotallyFlag: false,
      });
    });
  });
  describe("for CLOSE_MODAL action", () => {
    it("should return correct state", () => {
      expect(reducer(state, { type: "CLOSE_MODAL" })).toEqual(state);
    });
  });
});
