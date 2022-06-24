import { useState, useEffect } from "react";

const Item = (props) => {
  const [reveal, setReveal] = useState(250);

  const toggle = () => {
    {
      reveal === 250 ? setReveal(props.text.length) : setReveal(250);
    }
  };

  return (
    <article className="box">
      <img src={props.img} alt={props.title}></img>
      <footer>
        <div className="title">
          <h6 id="title-text">
            <b>{props.title}</b>
          </h6>
          <h6 id="title-price">
            <b>${props.price}</b>
          </h6>
        </div>
        <p id="tour-content">
          {props.text.substring(0, reveal)}
          {reveal === 250 && "..."}
          {reveal === 250 ? (
            <button className="delete-btn" onClick={toggle}>
              Read More
            </button>
          ) : (
            <button className="delete-btn" onClick={toggle}>
              Read Less
            </button>
          )}
        </p>
        <button
          type="button"
          className="btn btn-outline-danger"
          id="no-interest"
          onClick={() => props.handleClick(props.title)}
        >
          Not Interested
        </button>
      </footer>
    </article>
  );
};

export default Item;
