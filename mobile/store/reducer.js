import {
  CONTACTS_REQUEST,
  CONTACTS_FAILURE,
  CONTACTS_SUCCESS,
  MODAL_SHOW
} from "../store/action";

const initialState = {
  contacts: [],
  error: "",
  loading: false,
  modal: false,
  id: ""
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case MODAL_SHOW:
      return { ...state, modal: !state.modal, id: action.id };
    case CONTACTS_REQUEST:
      return { ...state, loading: true };
    case CONTACTS_SUCCESS:
      return {
        ...state,
        error: "",
        contacts: (state.contacts = action.data),
        loading: false
      };
    case CONTACTS_FAILURE:
      return { ...state, error: action.error.toString(), loading: false };
    default:
      return state;
  }
};

export default reducer;
