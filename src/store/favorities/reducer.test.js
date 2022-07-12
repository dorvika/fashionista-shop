import reducer from "./reducer";

describe("favorities reducer", () => {
  const state = [
    {
      name: "Сарафан",
      sku: 10001,
    },
  ];
  it("should return default value", () => {
    expect(reducer(undefined, {})).toEqual([]);
  });

  describe("for TOGGLE_FAVORITE action", () => {
    it("should add favorite product", () => {
      expect(
        reducer(state, {
          type: "TOGGLE_FAVORITE",
          payload: {
            product: {
              name: "Джинси",
              sku: 10011,
            },
          },
        })
      ).toEqual([
        {
          name: "Сарафан",
          sku: 10001,
        },
        {
          name: "Джинси",
          sku: 10011,
        },
      ]);
    });
    it("should not duplicate favorite product", () => {
      expect(
        reducer(state, {
          type: "TOGGLE_FAVORITE",
          payload: {
            product: {
              name: "Сарафан",
              sku: 10001,
            },
          },
        })
      ).toEqual([]);
    });
  });
});
