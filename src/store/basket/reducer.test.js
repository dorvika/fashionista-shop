import reducer from "./reducer";

describe("basket reducer", () => {
  const state = [
    {
      name: "Сарафан",
      sku: 10001,
      qty: 2,
    },
    {
      name: "Топ",
      sku: 10009,
      qty: 1,
    },
  ];

  it("should return default value", () => {
    expect(reducer(undefined, {})).toEqual([]);
  });

  describe("for ADD_TO_BASKET action", () => {
    it("should add product to basket and add 'qty' property for the first time added product", () => {
      expect(
        reducer(state, {
          type: "ADD_TO_BASKET",
          payload: {
            product: {
              name: "Сукня",
              sku: 10003,
            },
          },
        })
      ).toEqual([
        {
          name: "Сарафан",
          sku: 10001,
          qty: 2,
        },
        {
          name: "Топ",
          sku: 10009,
          qty: 1,
        },
        {
          name: "Сукня",
          sku: 10003,
          qty: 1,
        },
      ]);
    });
    it("should change qty of re-added product correctly", () => {
      expect(
        reducer(state, {
          type: "ADD_TO_BASKET",
          payload: {
            product: {
              name: "Сарафан",
              sku: 10001,
            },
          },
        })
      ).toEqual([
        {
          name: "Сарафан",
          sku: 10001,
          qty: 3,
        },
        {
          name: "Топ",
          sku: 10009,
          qty: 1,
        },
      ]);
    });
  });
  describe("for DELETE_FROM_BASKET", () => {
    it("should delete product from basket and decrease qty by one if deleteTotallyFlag is false", () => {
      expect(
        reducer(state, {
          type: "DELETE_FROM_BASKET",
          payload: { id: 10001, deleteTotallyFlag: false },
        })
      ).toEqual([
        {
          name: "Сарафан",
          sku: 10001,
          qty: 1,
        },
        {
          name: "Топ",
          sku: 10009,
          qty: 1,
        },
      ]);
    });
    it("should totally delete product from basket if deleteTotallyFlag is true", () => {
      expect(
        reducer(state, {
          type: "DELETE_FROM_BASKET",
          payload: { id: 10001, deleteTotallyFlag: true },
        })
      ).toEqual([
        {
          name: "Топ",
          sku: 10009,
          qty: 1,
        },
      ]);
    });
    it("should totally delete product from basket if qty is equal to 1 and deleteTotallyFlag is false", () => {
      expect(
        reducer(state, {
          type: "DELETE_FROM_BASKET",
          payload: { id: 10009, deleteTotallyFlag: false },
        })
      ).toEqual([
        {
          name: "Сарафан",
          sku: 10001,
          qty: 2,
        },
      ]);
    });
  });
});
