import React from "react";

const logHOC = (Component) => {
  return class LogHOC extends React.Component {
    componentDidUpdate(oldVal, newVal) {
      console.log(oldVal, newVal);
    }

    render() {
      return (
        <Component {...this.props} />
      )
    }
  }
}

export default logHOC;