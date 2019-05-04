import React, { Component } from "react";
import Modal from "./Modal";

const WithErrorHandler = (WrappedComponent, axios) => {
  return class extends Component {
    state = {
      error: null
    };
    componentDidMount() {
      this.reqInt = axios.interceptors.request.use(req => {
        this.setState({ error: null });
      });
      this.resInt = axios.interceptors.response.use(error => {
        this.setState({ error });
      });
    }
    componentWillUnmount() {
      axios.interceptors.request.eject(this.reqInt);
      axios.interceptors.response.eject(this.resInt);
    }
    render() {
      const { error } = this.state;
      return (
        <>
          {error && <Modal>Something goes wrong!</Modal>}
          <WrappedComponent {...this.props} />;
        </>
      );
    }
  };
};

export default WithErrorHandler;
