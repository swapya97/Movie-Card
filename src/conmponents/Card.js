const Card = (props) => {
  return (
    <div className="card">
      <div className="left_div">
         <div className="top_div">
          <img className="title_img" src={props.img} alt="img" />
          <div className="top_rigthdiv">
            <div className="name_year">
              <p className="name">{props.name}</p>
              <p className="year">{props.year}</p>
            </div>

            <div className="min_type">
              <p className="min">{props.min}</p>
              <p className="type">{props.type}</p>
            </div>
          </div>
         </div>
        <p className="info">{props.information}</p>
      </div>

      <img
        className="background_img"
        src={props.Background_img}
        alt="background img"
      />
     
    </div>
  );
};
export default Card;
