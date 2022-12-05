import { Component } from 'react';

class CardList extends Component {

  render() {
    const { monstersList } = this.props;

    return (
      <div>
        {monstersList().map((monster) => (
            <h1 key={monster.id}>{monster.name}</h1>
          ))}
      </div>
    );
  }
}

export default CardList;