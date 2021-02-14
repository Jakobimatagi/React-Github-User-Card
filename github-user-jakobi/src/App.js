import "./App.css";
import React from "react";
import axios from "axios";
import Followers from "./follower";
import styled from "styled-components";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: [],
      location: [],
      bio: [],
    };
  }

  componentDidMount() {
    console.log("mounted");
    this.githubData(this.state.username);
  }

  githubData = (getData) => {
    console.log("Get Data");

    axios
      .get("https://api.github.com/users/jakobimatagi")
      .then((res) => {
        console.log(res.data);
        this.setState({
          ...this.state,
          name: res.data.name,
          location: res.data.location,
          bio: res.data.bio,
        });
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <Styleddiv>
        <div className="App">
          <div className="userCard">
            <h1>{this.state.name}</h1>
            <h2>Bio: {this.state.bio}</h2>
            <h3>{`Location: ${this.state.location}`}</h3>
          </div>
          <Followers />
        </div>
      </Styleddiv>
    );
  }
}

export default App;

const Styleddiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 15% 25%;
  background-color: #5e548e;
  color: white;
  padding: 1rem 1rem;
  border-radius: 15%;
  

  h1 {
    background-color: #9f86c0;
    padding: 1rem 1rem;
    border-radius: 50%;
  }
  .userCard{
    background-color: #e0b1cb;
    padding: 1rem 1rem;
    border-radius: 15%;
  }
`;
