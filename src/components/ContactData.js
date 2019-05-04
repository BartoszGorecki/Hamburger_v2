import React, { useState } from "react";
import PropTypes from "prop-types";
import Spinner from "./Spinner";
import Input from "./Input";
import { connect } from "react-redux";
import { ButtonCC } from "../style/Button";
import { addOrderFB, resetBurger } from "../action";
import "../style/ContactData.css";

const ContactData = props => {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    city: "",
    address: ""
  });
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const checkValidation = () => {
    const { name, surname, email, city, address } = formData;
    return name && surname && email && city && address;
  };
  const prepareOrder = () => {
    const { name, surname, email, city, address } = formData;
    setLoading(true);
    const order = {
      ingredients: props.ingredients,
      price: props.price,
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
  const errorHandler = () => {
    setError(true);
    setTimeout(() => {
      setError(false);
    }, 2000);
  };
  const finalizeOrder = e => {
    e.preventDefault();
    if (checkValidation()) {
      props
        .addOrderFB(prepareOrder())
        .then(res => {
          setLoading(false);
          props.resetBurger();
          props.history.push("/");
        })
        .catch(err => console.log(err));
    } else {
      errorHandler();
    }
  };
  const inputChangeHandler = e => {
    const { value, name } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  return (
    <div className="contact-container">
      <h4>Enter your contact data</h4>
      {loading ? (
        <Spinner />
      ) : (
        <form onSubmit={finalizeOrder}>
          <Input
            type="text"
            name="name"
            value={formData.name}
            onChange={inputChangeHandler}
            placeholder="Your name"
          />
          <Input
            type="text"
            name="surname"
            value={formData.surname}
            onChange={inputChangeHandler}
            placeholder="Your surname"
          />
          <Input
            type="text"
            name="email"
            value={formData.email}
            onChange={inputChangeHandler}
            placeholder="Your email"
          />
          <Input
            type="text"
            name="city"
            value={formData.city}
            onChange={inputChangeHandler}
            placeholder="Your city"
          />
          <Input
            type="text"
            name="address"
            value={formData.address}
            onChange={inputChangeHandler}
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
};
ContactData.propTypes = {
  ingredients: PropTypes.object.isRequired,
  price: PropTypes.number.isRequired,
  addOrderFB: PropTypes.func.isRequired,
  resetBurger: PropTypes.func.isRequired
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
