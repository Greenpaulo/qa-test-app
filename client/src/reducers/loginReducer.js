import { LOGIN_USER } from "../actions/types";

const initialState = {
  isAuthenticated: false
}

export default function (state = initialState, action) {
  switch (action.type) {
    case LOGIN_USER:
      return {
        isAuthenticated: true,
      }
    // Case that the request hasn't returned yet
    default:
      return state;

  }
};