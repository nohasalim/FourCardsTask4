function CardItemComponent(props) {
  return (
  
      <div id={props.card}>
        <div id="container">
          <h4 id="header">{props.header}</h4>
          <p id="description">{props.description} </p>
        </div>
        <img src={props.img}></img>
      </div>

  );
}
export default CardItemComponent;
