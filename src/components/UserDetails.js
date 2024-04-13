import React from "react";

class UserDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  render() {
    const { name } = this.props;
    const { count } = this.state;
    return (
      <div className="user-detail">
        <h4>{count}</h4>
        <button
          onClick={() => {
            this.setState({
              count: count + 1,
            });
          }}
        >
          Click Me to increase the counter
        </button>
        <h4>{name}</h4>
        <h4>Location: Dhampur</h4>
        <h4>Contact: @theripper1116</h4>
      </div>
    );
  }
}

export default UserDetails;
