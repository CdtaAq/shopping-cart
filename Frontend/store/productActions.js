import axios from 'axios';

export const fetchProducts = () => async (dispatch) => {
  const res = await axios.get('/api/products');
  dispatch({ type: 'SET_PRODUCTS', payload: res.data });
};

export const addProduct = (formData) => async (dispatch) => {
  const res = await axios.post('/api/products', formData);
  dispatch({ type: 'ADD_PRODUCT', payload: res.data });
};

export const deleteProduct = (id) => async (dispatch) => {
  await axios.delete(`/api/products/${id}`);
  dispatch({ type: 'DELETE_PRODUCT', payload: id });
};

export const updateProduct = (product) => async (dispatch) => {
  const res = await axios.put(`/api/products/${product._id}`, product);
  dispatch({ type: 'UPDATE_PRODUCT', payload: res.data });
};
