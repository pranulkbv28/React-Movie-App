import React from "react";
import styles from "./movie.module.css";
import { useParams } from "react-router-dom";
import marvelMovies from "../../marvelMovies";
const Movie = () => {


  let {title} = useParams();
  let movie = marvelMovies.find(movie => movie.title === title)

  return( 
    <div className={styles.body}>
        <h1>
            {movie.title}
        </h1>
        {/* <br /> */}
        <h3>
            Realease date: {movie.year}
        </h3>
        {/* <br /> */}
        <p>
            <b>Movie description:</b> 
            <br />
            {movie.description}
        </p>
        {/* <br /> */}
        <p>
            <b>Genre</b>: {movie.genre}
        </p>
        <p>
            <b>Director</b>: {movie.director}
        </p>
        <p>
            <b>Cast</b>: {movie.cast}
        </p>
    </div>
)};

export default Movie;
