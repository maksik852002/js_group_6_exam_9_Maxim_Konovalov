import {
  FORM_REQUEST,
  FORM_SUCCESS,
  FORM_FAILURE,
  VALUE_CHANGE,
  VALUE_CLEAR
} from "./actionsTypes";
import axios from "../../axios-setup";

export const valueChanged = event => {
  event.persist();
  return { type: VALUE_CHANGE, event };
};
export const valueClear = () => ({ type: VALUE_CLEAR });
export const formRequest = () => ({ type: FORM_REQUEST });
export const formSuccess = data => ({ type: FORM_SUCCESS, data });
export const formFailure = error => ({ type: FORM_FAILURE, error });

export const getFormData = id => {
  return async dispatch => {
    try {
      dispatch(formRequest());
      const response = await axios.get(`/contact-list/${id}.json`);
      dispatch(formSuccess(response.data));
    } catch (e) {
      dispatch(formFailure(e));
    }
  };
};

export const createContact = data => {
  return async dispatch => {
    try {
      await axios.post("/contact-list.json", data);
    } catch (e) {
      dispatch(formFailure(e));
    }
  };
};

export const editContact = (id, data) => {
  return async dispatch => {
    try {
      await axios.patch(`/contact-list/${id}.json`, data);
    } catch (e) {
      dispatch(formFailure(e));
    }
  };
};
