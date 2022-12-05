import { Component } from "react";

import CardList from './components/card-list/card-list'
import SearchBox from './components/search-box/search-box'
import "./App.css";

class App extends Component {
  constructor() {
    super()

    this.state = {
      monsters: [],
      searchInput: '',
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState({ monsters: users })
      );
  }

  onSearchChange = (event) => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  monstersList = () => {
    const { monsters, searchInput } = this.state
    if (!searchInput) return monsters

    return monsters.filter(monster => monster.name?.match(
      new RegExp(`(^${searchInput}| ${searchInput})`, "i"))
    )
  }

  render() {
    return (
      <div className="App">
        <SearchBox 
          onChangeHandler={this.onSearchChange}
          placeholder='search monsters'
          className='monsters-search-box'
        />
        <CardList monsters={this.monstersList()}/>
      </div>
    );
  }
}

export default App
