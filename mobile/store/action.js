import axios from "../axios-setup";

export const CONTACTS_REQUEST = "CONTACTS_REQUEST";
export const CONTACTS_SUCCESS = "CONTACTS_SUCCESS";
export const CONTACTS_FAILURE = "CONTACTS_FAILURE";
export const MODAL_SHOW = "MODAL_SHOW";

export const contactsRequest = () => ({ type: CONTACTS_REQUEST });
export const contactsSuccess = data => ({ type: CONTACTS_SUCCESS, data });
export const contactsFailure = error => ({ type: CONTACTS_FAILURE, error });
export const modalShow = id => ({ type: MODAL_SHOW, id });

export const getContacts = () => {
  return async dispatch => {
    try {
      dispatch(contactsRequest());
      const response = await axios.get("/contact-list.json");
      dispatch(contactsSuccess(response.data === null ? [] : response.data));
    } catch (e) {
      dispatch(contactsFailure(e));
    }
  };
};
