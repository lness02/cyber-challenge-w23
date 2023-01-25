import React from "react";
import axios from "axios";
import spider from "./spiderman.jpg";
import "./styles.css";

export default class App extends React.Component {
  state = {
    users: [],
  };
  componentDidMount() {
    axios.get("/users.json", {headers: {'My-Custom-Header': 'flag{sp1d3rm4n_d03s_wh4t3v3r_a_sp1d3r_c4n}'}}).then((response) => {
      this.setState({ users: response.data });
    });
  }

  render() {
    const { users } = this.state;
    return (
      <div>
        <h1>your friendly neighborhood villain registry!</h1>
        <img src = {spider} alt = "spider"></img>
        <ul className="users">
          {users.map((user) => (
            <li className="user">
              <p>
                <strong>Name:</strong> {user.name}
              </p>
              <p>
              <strong>Alias:</strong> {user.username}
              </p>
            </li>
          ))}
        </ul>

        <p></p>
      </div>
    );
  }
}