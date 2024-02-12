import React, { useState } from "react";
import styles from "./home.module.css";
import marvelMovies from "../../marvelMovies";
import Card from "../../components/Card";

const Home = () => {
  let [search, setSearch] = useState("");

  let filterdMovies = marvelMovies.filter((movie) => {
    return movie.title.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div className={styles.body}>
      <div className={styles.nav}>
        <input
          className={styles.inputSearch}
          type="text"
          name="movieSearch"
          id="movieSearch"
          placeholder="Search for any Marvel Movie here"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </div>
      <div className={styles.cardContainer}>
        {filterdMovies.length === 0 ? (
          <h1>No Such Movies Found!!</h1>
        ) : (
          filterdMovies.map((movie) => {
            return (
              <Card
                key={movie.id}
                title={movie.title}
                link={`/movie/${movie.title}`}
                year={movie.year}
                description={movie.description}
                cardBody={styles.cardBody}
                cardHeader={styles.cardHeader}
                cardDesc={styles.cardDesc}
                cardFooter={styles.cardFooter}
              />
            );
          })
        )}
      </div>
    </div>
  );
};

export default Home;
