import { render, screen } from "@testing-library/react";
import Modal from "./Modal";
import { Provider } from "react-redux";
import { legacy_createStore as createStore } from "redux";
import { rootReducer } from "../../store/store";

describe("<Modal /> component", () => {
  const store = createStore(rootReducer, {
    modal: {
      isOpen: false,
      content: null,
      action: null,
      product: {},
      deleteTotallyFlag: false,
    },
  });

  it("should render modal with three buttons", () => {
    render(
      <Provider store={store}>
        <Modal />
      </Provider>
    );
    screen.getByRole("button", { name: /×/i });
    screen.getByRole("button", { name: /ок/i });
    screen.getByRole("button", { name: /скасувати/i });
  });
  it("should match snapshot", () => {
    const { container } = render(
      <Provider store={store}>
        <Modal />
      </Provider>
    );
    expect(container).toMatchSnapshot();
  });
});
