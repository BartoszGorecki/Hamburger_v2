import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Spinner from "./Spinner";
import Input from "./Input";
import { connect } from "react-redux";
import { ButtonCC } from "../style/Button";
import { addOrderFB, resetBurger } from "../action";
import "../style/ContactData.css";

class ContactData extends PureComponent {
  state = {
    name: "",
    surname: "",
    email: "",
    city: "",
    address: "",
    error: false,
    loading: false
  };
  checkValidation = () => {
    const { name, surname, email, city, address } = this.state;
    return name && surname && email && city && address;
  };
  prepareOrder = () => {
    const { name, surname, email, city, address } = this.state;
    this.setState({
      loading: true
    });
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      customer: {
        name,
        surname,
        email,
        city,
        address
      }
    };
    return order;
  };
  errorHandler = () => {
    const self = this;
    this.setState({
      error: true
    });
    setTimeout(() => {
      self.setState({
        error: false
      });
    }, 2000);
  };
  finalizeOrder = e => {
    e.preventDefault();
    if (this.checkValidation()) {
      this.props
        .addOrderFB(this.prepareOrder())
        .then(res =>
          this.setState(
            {
              loading: false
            },
            () => {
              this.props.resetBurger();
              this.props.history.push("/");
            }
          )
        )
        .catch(err => console.log(err));
    } else {
      this.errorHandler();
    }
  };
  inputChangeHandler = e => {
    const { value, name } = e.target;
    this.setState({
      [name]: value
    });
  };
  render() {
    const { loading, name, surname, email, address, city, error } = this.state;
    return (
      <div className="contact-container">
        <h4>Enter your contact data</h4>
        {loading ? (
          <Spinner />
        ) : (
          <form onSubmit={this.finalizeOrder}>
            <Input
              type="text"
              name="name"
              value={name}
              onChange={this.inputChangeHandler}
              placeholder="Your name"
            />
            <Input
              type="text"
              name="surname"
              value={surname}
              onChange={this.inputChangeHandler}
              placeholder="Your surname"
            />
            <Input
              type="text"
              name="email"
              value={email}
              onChange={this.inputChangeHandler}
              placeholder="Your email"
            />
            <Input
              type="text"
              name="city"
              value={city}
              onChange={this.inputChangeHandler}
              placeholder="Your city"
            />
            <Input
              type="text"
              name="address"
              value={address}
              onChange={this.inputChangeHandler}
              placeholder="Your address"
            />
            {error && (
              <p style={{ color: "red" }}>Please fill all form inputs!</p>
            )}
            <ButtonCC>Order</ButtonCC>
          </form>
        )}
      </div>
    );
  }
}
ContactData.propTypes = {
  ingredients: PropTypes.object.isRequired,
  price: PropTypes.number.isRequired
};
const mapStateToProps = state => {
  return {
    ingredients: state.burger.ingredients,
    price: state.burger.totalPrice
  };
};

export default connect(
  mapStateToProps,
  { addOrderFB, resetBurger }
)(ContactData);
