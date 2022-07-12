const initialState = {
  isOpen: false,
  content: null,
  action: null,
  product: {},
  deleteTotallyFlag: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "OPEN_MODAL": {
      return {
        ...state,
        isOpen: true,
        content: action.payload.content,
        action: action.payload.action,
        product: action.payload.product,
        deleteTotallyFlag: action.payload.deleteTotallyFlag,
      };
    }
    case "CLOSE_MODAL": {
      return {
        ...state,
        isOpen: false,
        content: null,
        action: null,
        product: {},
        deleteTotallyFlag: false,
      };
    }
    default: {
      return state;
    }
  }
};

export const modal = (state) => state.modal;

export default reducer;
