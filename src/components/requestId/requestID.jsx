import React from "react";

class RequestIdGenerator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      requestId: "",
    };
  }

  componentDidMount() {
    this.generateRequestId();
  }

  generateRequestId = () => {
    const timestamp = Date.now();
    const randomNum = Math.floor(Math.random() * 1000);
    const requestId = `${timestamp}-${randomNum}`;
    this.setState({ requestId });
  };

  render() {
    const { requestId } = this.state;

    return <div>{requestId && <p>{requestId}</p>}</div>;
  }
}

export default RequestIdGenerator;
