import './card.css'

const Card = ({ monster }) => {
  const { id, name, email } = monster

  const imageLink = (id) => {
    return `https://robohash.org/${id}?set=set2&size=180x180`
  }

  return (
    <div className='card-container' key={id}>
      <img
        alt={`monster ${name}`}
        src={imageLink(id)}
      />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  )
}

export default Card
