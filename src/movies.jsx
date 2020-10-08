import React from "react";
import "./styles.css";

export default function Movies() {
  const [movieList, setMovieList] = React.useState([
    {
      title: "HarryPotter",
      rating: 8.8,
      actors: "Daniel Radcliffe, Emma Watson ,Rupert Grint",
      isLiked: false,
      isWatchList: false
    },
    {
      title: "Avengers",
      rating: 9.2,
      actors:
        "Robert D Junior, Chris Evans, Chris Hemsworth, Mark Ruffalo, Jeremy Renner , Scarellet Johannason",
      isLiked: false,
      isWatchList: false
    },
    {
      title: "Lord of the Rings",
      rating: 9.8,
      actors:
        "Orlando Bloom, Viggo Mortensen, Andy Serkis, Elijah Wood, Ian McKellen",
      isLiked: false,
      isWatchList: false
    }
  ]);

  return movieList.map((movie) => (
    <div className="moviecard">
      <p>{movie.title}</p>
      <p>{movie.rating}</p>
      <p>{movie.actors}</p>
      <button className="watchlist">
        {movie.isWatchList ? "Remove from WatchList" : "Add to WatchList"}
      </button>
      <button className="delete">Delete</button>
    </div>
  ));
}
