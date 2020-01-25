import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getContacts,
  removeContact,
  modalShow,
  modalClose
} from "../../store/actions/contactListActions";
import Contact from "../../components/Contact/Contact";
import Button from "../../components/UI/Button/Button";
import Spinner from "../../components/UI/Spinner/Spinner";
import Modal from "../../components/UI/Modal/Modal";

class ContactList extends Component {
  componentDidMount() {
    this.props.getContacts();
  }

  createHandler = () => {
    this.props.history.push("/create");
  };

  removeHandler = async id => {
    this.props.modalClose();
    await this.props.removeContact(id);
    this.props.getContacts();
  };

  editHandler = id => {
    this.props.modalClose();
    this.props.history.push(`/${id}/edit`);
  };

  render() {
    const {
      contacts,
      loading,
      error,
      show,
      modalShow,
      modalClose
    } = this.props;
    return (
      <div className="container">
        {show && (
          <Modal
            show={show}
            id={this.props.id}
            contacts={contacts}
            close={modalClose}
            remove={() => this.removeHandler(this.props.id)}
            edit={() => this.editHandler(this.props.id)}
          />
        )}
        <div className="d-flex justify-content-between">
          <h2>Contacts</h2>
          <Button
            label="Add new contact"
            addClass="secondary"
            click={this.createHandler}
          />
        </div>
        <div className="mt-3">
          <div className="border border-secondary rounded py-2 d-flex flex-wrap">
            {error.length > 0 ? (
              <p className="text-center w-100">{error}</p>
            ) : loading ? (
              <Spinner />
            ) : (
              Object.keys(contacts).map(id => (
                <Contact
                  key={id}
                  id={id}
                  name={contacts[id].name}
                  photo={contacts[id].photo}
                  click={() => modalShow(id)}
                />
              ))
            )}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    contacts: state.cont.contacts,
    loading: state.cont.loading,
    error: state.cont.error,
    show: state.cont.show,
    id: state.cont.id
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getContacts: () => dispatch(getContacts()),
    removeContact: id => dispatch(removeContact(id)),
    modalShow: id => dispatch(modalShow(id)),
    modalClose: () => dispatch(modalClose())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
