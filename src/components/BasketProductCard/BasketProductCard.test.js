import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import BasketProductCard from "./BasketProductCard";
import { rootReducer } from "../../store/store";
import { legacy_createStore as createStore } from "redux";

describe("<Button /> component", () => {
  const store = createStore(rootReducer);
  it("should match snapshot", () => {
    const { container } = render(
      <Provider store={store}>
        <BasketProductCard
          productObj={{
            name: "Dress",
            price: "699",
            img: null,
            color: "white",
            qty: 3,
          }}
        />
      </Provider>
    );
    expect(container).toMatchSnapshot();
  });
});
