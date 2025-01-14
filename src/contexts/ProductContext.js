import { createContext } from "react";

const initialValues = {
  cartItems: [],
  products: [],
  isLoading: false,
  hasError: false,
  loadingError: false,
  handleDownVote: () => {},
  handleUpVote: () => {},
  handleSetFavorite: () => {},
  handleAddToCart: () => {},
  handleRemove: () => {},
  handleChange: () => {},
  saveNewProduct: () => {}
};

const ProductContext = createContext(initialValues);

export default ProductContext;