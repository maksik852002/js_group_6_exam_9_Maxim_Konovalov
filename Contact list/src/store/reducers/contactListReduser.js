import {
  CONTACT_REQUEST,
  CONTACT_FAILURE,
  CONTACT_SUCCESS,
  MODAL_SHOW,
  MODAL_CLOSE
} from "../actions/actionsTypes";

const initialState = {
  contacts: [],
  error: "",
  loading: false,
  id: "",
  show: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case MODAL_CLOSE:
      return { ...state, show: false, id: "" };
    case MODAL_SHOW:
      return { ...state, id: action.id, show: !state.show };
    case CONTACT_REQUEST:
      return { ...state, loading: true };
    case CONTACT_SUCCESS:
      return {
        ...state,
        contacts: (state.contacts = action.data),
        loading: false,
        error: ""
      };
    case CONTACT_FAILURE:
      return { ...state, error: action.error.toString(), loading: false };
    default:
      return state;
  }
};

export default reducer;
