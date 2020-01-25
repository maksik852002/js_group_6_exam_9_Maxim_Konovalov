import {
  FORM_REQUEST,
  FORM_FAILURE,
  FORM_SUCCESS,
  VALUE_CHANGE,
  VALUE_CLEAR
} from "../actions/actionsTypes";

const initialState = {
  loading: false,
  name: "",
  phone: "",
  eMail: "",
  photo: "",
  error: ""
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case VALUE_CLEAR:
      return { ...state, name: "", phone: "", eMail: "", photo: "" };
    case VALUE_CHANGE:
      return {
        ...state,
        [action.event.target.name]: action.event.target.value
      };
    case FORM_REQUEST:
      return { ...state, loading: true };
    case FORM_SUCCESS:
      return {
        ...state,
        name: action.data.name,
        phone: action.data.phone,
        eMail: action.data.eMail,
        photo: action.data.photo,
        loading: false
      };
    case FORM_FAILURE:
      return { ...state, error: action.error.toString(), loading: false };
    default:
      return state;
  }
};

export default reducer;
