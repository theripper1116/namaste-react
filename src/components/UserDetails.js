import React from "react";

import { GIT_HUB_USER_URL } from "../utils/Links";
class UserDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      avatar_url: "",
      html_url: "",
    };
  }
  fetchUserDetailFromGitHub = async () => {
    const rawData = await fetch(GIT_HUB_USER_URL);
    const data = await rawData.json();
    this.setState({
      avatar_url: data.avatar_url,
      html_url: data.html_url,
    });
  };
  componentDidMount() {
    this.fetchUserDetailFromGitHub();
  }
  render() {
    const { name } = this.props;
    const { avatar_url, html_url } = this.state;
    return (
      <div className="user-detail-card">
        <img className="user-detail-avatar-image" src={avatar_url}></img>
        <div className="user-detail-section">
          <h4>{name}</h4>
          <h4>{html_url}</h4>
          <h4>Contact: @theripper1116</h4>
        </div>
      </div>
    );
  }
}

export default UserDetails;
