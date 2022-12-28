import "./Card.css";

const Card = () => {
  return (
    <div className="card-principal">
      <div className="imagem">
        <img src="./img/foto.png"></img>{" "}
      </div>
      <div className="text">
        <div>
          <p>Current Bid</p>
          <h3>20.88ETH</h3>
        </div>
        <div>
          <p>Romaing Time</p>
          <h3>08:24:11</h3>
        </div>
      </div>
    </div>
  );
};

export default Card;
