import { Component } from "react";

import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchInput: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => {
            return { monsters: users };
          },
          () => {
            // console.log(this.state);
          }
        )
      );
  }

  setSearchInput(inputValue) {
    this.setState({
      searchInput: inputValue,
    });
  }

  isNameMatch(monster) {
    const searchValue = this.state.searchInput;
    return monster.name.match(
      new RegExp(`(^${searchValue}| ${searchValue})`, "i")
    );
  }

  render() {
    return (
      <div className="App">
        <input
          className="search-box"
          type="search"
          placeholder="Search monsters"
          onChange={(event) => this.setSearchInput(event.target.value)}
        />

        {this.state.monsters
          .filter((monster) => this.isNameMatch(monster))
          .map((monster) => (
            <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>
          ))}
      </div>
    );
  }
}

export default App;
