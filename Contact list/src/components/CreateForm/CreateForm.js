import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getFormData,
  valueChanged,
  createContact,
  editContact,
  valueClear
} from "../../store/actions/createFormActions";
import Button from "../UI/Button/Button";
import Spinner from "../UI/Spinner/Spinner";

class CreateForm extends Component {
  async componentDidMount() {
    const id = this.props.match.params.id;
    if (this.props.match.url === `/${id}/edit`) {
      this.props.getFormData(id);
    }
  }

  componentWillUnmount() {
    this.props.valueClear();
  }

  submitHandler = async e => {
    e.preventDefault();
    const id = this.props.match.params.id;
    const contact = {
      name: this.props.name,
      phone: this.props.phone,
      eMail: this.props.eMail,
      photo: this.props.photo
    };
    this.props.match.url !== `/${id}/edit`
      ? await this.props.createContact(contact)
      : await this.props.editContact(id, contact);
    this.props.history.push("/");
  };

  cancelHandler = () => {
    this.props.history.goBack();
  };

  render = () => {
    const isTrue = this.props.match.url !== "/create";
    return (
      <div className="container">
        <h4 className="text-center mb-5">
          {!isTrue
            ? "Введите данные для создания контакта"
            : "Введите данные для изменения контакта"}
        </h4>
        {this.props.loading ? (
          <Spinner />
        ) : (
          <form className="w-75 m-auto">
            <div className="form-group row">
              <label htmlFor="inputName" className="col-sm-2 col-form-label">
                Name
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  id="inputName"
                  name="name"
                  value={this.props.name}
                  onChange={this.props.valueChanged}
                />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="inputPhone" className="col-sm-2 col-form-label">
                Phone
              </label>
              <div className="col-sm-10">
                <input
                  type="tel"
                  className="form-control"
                  id="inputPhone"
                  name="phone"
                  value={this.props.phone}
                  onChange={this.props.valueChanged}
                />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="inputEmail" className="col-sm-2 col-form-label">
                Email
              </label>
              <div className="col-sm-10">
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail"
                  name="eMail"
                  value={this.props.eMail}
                  onChange={this.props.valueChanged}
                />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="inputPhoto" className="col-sm-2 col-form-label">
                Photo
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  id="inputPhoto"
                  name="photo"
                  value={this.props.photo}
                  onChange={this.props.valueChanged}
                />
              </div>
            </div>
            <div className="form-group row">
              <label
                htmlFor="inputPhotoPreview"
                className="col-sm-2 col-form-label"
              >
                Photo preview
              </label>
              <div className="col-sm-10">
                <img
                  className="border"
                  src={this.props.photo ? this.props.photo : 'http://s1.iconbird.com/ico/0612/HydroPROv2/w512h5121339359179HPMSNDock512.png'}
                  alt="User"
                  width="100px"
                />
              </div>
            </div>
            <div className="form-group row">
              <div className="w-100 d-flex justify-content-between">
                <Button
                  type="submit"
                  label={!isTrue ? "Create" : "Edit"}
                  addClass="secondary"
                  click={this.submitHandler}
                />
                <Button
                  type="button"
                  label="Cancel"
                  addClass="secondary"
                  click={this.cancelHandler}
                />
              </div>
            </div>
          </form>
        )}
      </div>
    );
  };
}

const mapStateToProps = state => {
  return {
    name: state.form.name,
    phone: state.form.phone,
    eMail: state.form.eMail,
    photo: state.form.photo,
    loading: state.form.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getFormData: id => dispatch(getFormData(id)),
    createContact: data => dispatch(createContact(data)),
    editContact: (id, dish) => dispatch(editContact(id, dish)),
    valueChanged: e => dispatch(valueChanged(e)),
    valueClear: () => dispatch(valueClear())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateForm);
