import { useState, useEffect } from "react";

import CardList from './components/card-list/card-list'
import SearchBox from './components/search-box/search-box'
import "./App.css";

const App = () => {
  const [searchInput, setSearchInput] = useState('')
  const [monsters, setMonsters] = useState([])
  const [monstersList, setMonstersList] = useState(monsters)

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => setMonsters(users)
      );
  }, [])

  useEffect(() => {
    const newMonstersList = monsters.filter(monster => monster.name?.match(
      new RegExp(`(^${searchInput}| ${searchInput})`, "i")))

    setMonstersList(newMonstersList)

  }, [monsters, searchInput])

  const onSearchChange = (event) => {
    setSearchInput(event.target.value)
  }

  return (
    <div className="App">
      <h1 className="app-title">Monsters Rolodex</h1>
      <SearchBox
        onChangeHandler={onSearchChange}
        placeholder='search monsters'
        className='monsters-search-box'
      />
      <CardList monsters={monstersList}/>
    </div>
  );
}

export default App
