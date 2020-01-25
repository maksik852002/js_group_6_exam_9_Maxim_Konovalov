import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducer from "./store/reducer";
import Contacts from "./containers/Contacts/Contacts";
import thunk from "redux-thunk";

const store = createStore(reducer, applyMiddleware(thunk));

export default function App() {
  return (
    <Provider store={store}>
      <Contacts />
    </Provider>
  );
}
