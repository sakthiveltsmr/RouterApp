import React from "react";
import ReactDom from "react-dom";
import { Link } from "react-router-dom";
class Home extends React.Component {
  render() {
    return (
      <div>
        <p>Wellcome to Router Page</p>
        <Link to="/about">
          <h3>click here to see about</h3>
        </Link>
      </div>
    );
  }
}

export default Home;
