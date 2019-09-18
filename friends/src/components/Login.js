import React from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import styled from "styled-components";

class Login extends React.Component {
  state = {
    credentials: {
      username: "",
      password: ""
    }
  };

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  login = e => {
    e.preventDefault();
    axiosWithAuth()
      .post("/login", this.state.credentials)
      .then(res => {
        localStorage.setItem("token", res.data.payload);
        this.props.history.push("/friendlist");
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <br />
        <br />
        <form onSubmit={this.login}>
          <TheInput
            type="text"
            name="username"
            value={this.state.credentials.username}
            placeholder=" insert username"
            onChange={this.handleChange}
          />
          <TheInput
            type="password"
            name="password"
            value={this.state.credentials.password}
            placeholder=" insert password"
            onChange={this.handleChange}
          />
          <TheBtn>Log in</TheBtn>
        </form>
      </div>
    );
  }
}

export default Login;

const TheInput = styled.input`
  border: 2px solid black;
  margin-right: 5px;
  align-items: center;
`;

const TheBtn = styled.button`
  align-items: center;
  border: 1px solid black;
  margin-left: 15px;
  border-radius: 4px;
  height: 1.5rem;
  width: 4rem;
`;
