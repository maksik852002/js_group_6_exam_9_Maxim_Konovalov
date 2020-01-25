import {
  CONTACT_REQUEST,
  CONTACT_SUCCESS,
  CONTACT_FAILURE,
  MODAL_SHOW,
  MODAL_CLOSE
} from "./actionsTypes";
import axios from "../../axios-setup";

export const contactRequest = () => ({ type: CONTACT_REQUEST });
export const contactSuccess = data => ({ type: CONTACT_SUCCESS, data });
export const contactFailure = error => ({ type: CONTACT_FAILURE, error });
export const modalShow = id => ({ type: MODAL_SHOW, id });
export const modalClose = () => ({ type: MODAL_CLOSE });

export const getContacts = () => {
  return async dispatch => {
    try {
      dispatch(contactRequest());
      const response = await axios.get("/contact-list.json");
      dispatch(contactSuccess(response.data === null ? {} : response.data));
    } catch (e) {
      dispatch(contactFailure(e));
    }
  };
};

export const removeContact = id => {
  return async dispatch => {
    try {
      await axios.delete(`/contact-list/${id}.json`);
      dispatch(contactSuccess({}));
    } catch (e) {
      dispatch(contactFailure(e));
    }
  };
};
