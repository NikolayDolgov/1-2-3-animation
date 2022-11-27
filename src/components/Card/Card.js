import './Card.css';

function Card() {

  return (
    <div className='card'>
      <div className="card__front rotate">
        <span className="card__text">front</span>
      </div>
      <div className="card__back rotate">
        <span className="card__text">back</span>
      </div>
    </div>)
}

export default Card;