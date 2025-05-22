const initialState = { items: [] };

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_PRODUCTS':
      return { items: action.payload };
    case 'ADD_PRODUCT':
      return { items: [action.payload, ...state.items] };
    case 'DELETE_PRODUCT':
      return { items: state.items.filter(p => p._id !== action.payload) };
    case 'UPDATE_PRODUCT':
      return {
        items: state.items.map(p =>
          p._id === action.payload._id ? action.payload : p
        ),
      };
    default:
      return state;
  }
};

export default productReducer;
