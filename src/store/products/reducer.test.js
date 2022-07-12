import reducer from "./reducer";

describe("products reducer", () => {
  const state = {
    loading: false,
    products: [],
    error: false,
  };

  it("should return default value", () => {
    expect(reducer(undefined, {})).toEqual(state);
  });
  describe("for GET_PRODUCTS_REQUESTED action", () => {
    it("should return state with truthy 'loading' property", () => {
      expect(reducer(state, { type: "GET_PRODUCTS_REQUESTED" })).toEqual({
        loading: true,
        products: [],
        error: false,
      });
    });
  });
  describe("for GET_PRODUCTS_SUCCESS action", () => {
    it("should add passed products to 'products' property of state", () => {
      expect(
        reducer(state, {
          type: "GET_PRODUCTS_SUCCESS",
          payload: {
            products: [
              {
                name: "Джинси",
                sku: 760,
              },
              {
                name: "Топ",
                sku: 792,
              },
            ],
          },
        })
      ).toEqual({
        loading: false,
        products: [
          {
            name: "Джинси",
            sku: 760,
          },
          {
            name: "Топ",
            sku: 792,
          },
        ],
        error: false,
      });
    });
  });
  describe("for GET_PRODUCTS_ERROR action", () => {
    it("should return state with truthy 'error' property", () => {
      expect(reducer(state, { type: "GET_PRODUCTS_ERROR" })).toEqual({
        loading: false,
        products: [],
        error: true,
      });
    });
  });
});
