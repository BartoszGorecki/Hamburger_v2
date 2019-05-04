import React, { useState, useEffect } from "react";
import Order from "./Order";
import Spinner from "./Spinner";
import { connect } from "react-redux";
import { fetchOrders } from "../action";
import "../style/Orders.css";

const Orders = props => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    props.fetchOrders().then(data => setLoading(false));
  });
  const convertToArray = () => {
    const ordersArr = [];
    for (let key in props.orders) {
      ordersArr.push({
        id: key,
        ...props.orders[key]
      });
    }
    return ordersArr;
  };
  return (
    <div className="orders">
      {loading ? (
        <Spinner />
      ) : (
        convertToArray().map(({ id, ingredients, price }) => {
          return <Order key={id} ingredients={ingredients} price={price} />;
        })
      )}
    </div>
  );
};
const mapStateToProps = state => {
  return {
    orders: state.orders.orders
  };
};

export default connect(
  mapStateToProps,
  { fetchOrders }
)(Orders);
