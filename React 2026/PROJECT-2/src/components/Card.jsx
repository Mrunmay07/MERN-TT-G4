import '../styles/Card.css'

function Card({title , image , year , rating}) {

    /* const {title , image , year , rating} = props */

  return (
    <div className="card">
      <img src={image} alt="" />
      <h2 style={{color:"red" , backgroundColor:"blue"}}>{title}</h2>
      <p>{year}</p>
      <p>{rating}</p>
      <button>Watch Now</button>
    </div>
  );
}

export default Card;
