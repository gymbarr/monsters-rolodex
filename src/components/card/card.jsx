import { Component } from 'react';

import './card.css'

class Card extends Component {
  imageLink = (id) => {
    return `https://robohash.org/${id}?set=set2&size=180x180`
  }

  render() {
    // assigning the empty object needed if monster doesn't have this properties
    const { monster: { id, name, email } = {} } = this.props

    return (
      <div className='card-container' key={id}>
        <img
          alt={`monster ${name}`}
          src={this.imageLink(id)}
        />
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    )
  }
}

export default Card
