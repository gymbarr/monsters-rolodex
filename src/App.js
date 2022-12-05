import { Component } from "react";

import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchInput: '',
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

  setSearchInput = (event) => {
    this.setState({
      searchInput: event.target.value,
    });
  }

  monstersList = () => {
    const { monsters, searchInput } = this.state;

    if (!searchInput) return monsters;

    return monsters.filter((monster) => {
      return monster.name?.match(
        new RegExp(`(^${searchInput}| ${searchInput})`, "i")
      );
    })
  }

  render() {
    return (
      <div className="App">
        <input
          className="search-box"
          type="search"
          placeholder="Search monsters"
          onChange={this.setSearchInput}
        />

        {this.monstersList()
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
