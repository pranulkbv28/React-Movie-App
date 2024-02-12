import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <Link className={props.cardBody} to={props.link}>
      <div>
        <div className={props.cardHeader}>
          <h1>{props.title}</h1>
          <h6>{props.year}</h6>
        </div>
        <hr />
        <div className={props.cardDesc}>
          <p>
            <b>Description:</b>
          </p>
          <p>
            <i>{props.description}</i>
          </p>
          <p className={props.genre === "" ? "" : "d-none"}>
            Genre: {props.genre}
          </p>
        </div>
        <div className={props.cardFooter}>
          <p className={props.genre === "" ? "" : "d-none"}>
            Director: {props.director}
          </p>
          <p className={props.genre === "" ? "" : "d-none"}>
            Cast: {props.cast}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
