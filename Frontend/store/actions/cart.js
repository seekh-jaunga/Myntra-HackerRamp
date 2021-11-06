export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const ADD_TO_SESSION_CART="ADD_TO_SESSION_CART";
export const REMOVE_FROM_SESSION_CART="REMOVE_FROM_SESSION_CART";

export const addToCart = product => {
  return { type: ADD_TO_CART, product: product };
};

export const removeFromCart = productId => {
  return { type: REMOVE_FROM_CART, pid: productId };
};

export const addToSessionCart = product => {
  return { type: ADD_TO_SESSION_CART, product: product };
};

export const removeFromSessionCart = productId => {
  return { type: REMOVE_FROM_SESSION_CART, pid: productId };
};
