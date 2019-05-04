import React, { Component } from "react";
import Order from "./Order";
import Spinner from "./Spinner";
import { connect } from "react-redux";
import { fetchOrders } from "../action";
import "../style/Orders.css";

class Orders extends Component {
  state = {
    loading: true
  };
  componentDidMount() {
    this.props.fetchOrders().then(data =>
      this.setState({
        loading: false
      })
    );
  }
  shouldComponentUpdate(prevProps) {
    return prevProps.orders === this.props.orders;
  }
  convertToArray = () => {
    const ordersArr = [];
    for (let key in this.props.orders) {
      ordersArr.push({
        id: key,
        ...this.props.orders[key]
      });
    }
    return ordersArr;
  };
  render() {
    const { loading } = this.state;
    return (
      <div className="orders">
        {loading ? (
          <Spinner />
        ) : (
          this.convertToArray().map(({ id, ingredients, price }) => {
            return <Order key={id} ingredients={ingredients} price={price} />;
          })
        )}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    orders: state.orders.orders
  };
};

export default connect(
  mapStateToProps,
  { fetchOrders }
)(Orders);
