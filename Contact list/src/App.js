import React from "react";
import { Route, Switch } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import CreateForm from "./components/CreateForm/CreateForm";
import ContactList from "./containers/ContactList/ContactList";
// import Orders from "./containers/Orders/Orders";

const App = () => (
  <Layout>
    <Switch>
      <Route path="/" exact component={ContactList} />
      <Route path="/create" component={CreateForm} />
      <Route path="/:id/edit" component={CreateForm} />
      {/* <Route path="/orders" component={Orders} /> */}
      <Route render={() => <h1>Not found</h1>} />
    </Switch>
  </Layout>
);

export default App;
