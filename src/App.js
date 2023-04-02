import React, { useState } from "react";
import { useEffect } from "react";
import "../src/App.css";
import logo from "../src/Search.svg";
import MovieCard from "./MovieCard";
import Error from "./Error";

const Api_Url = "https://www.omdbapi.com?apikey=1cf8d23d";
// let obj = {
//   Title: "Batman v Superman: Dawn of Justice",
//   Year: "2016",
//   imdbID: "tt2975590",
//   Type: "movie",
//   Poster:
//     "https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
// };

const App = () => {
  const [movie, setMovie] = useState([]);
  const [search, setSearch] = useState("");
  const SearchMovies = async (title) => {
    const response = await fetch(`${Api_Url}&s=${title}`);
    const data = await response.json();
    setMovie(data.Search);
  };

  useEffect(() => {
    SearchMovies("general");
  }, []);

  return (
    <>
      <div className="app">
        <h1>MovieLand</h1>
        <div className="search">
          <input
            type="text"
            placeholder="Search for movies"
            value={search}
            onChange={(e) => {setSearch(e.target.value)}}
          />
          <img src={logo} alt="" onClick={() => SearchMovies(search?search:(<Error/>))} />
        </div>
        {movie.length > 0 ? (
          <div className="container">
            {movie?.map((obj) => (
              <MovieCard obj={obj} />
            ))}
          </div>
        ) : (
          <div className="empty">
            <h2>No movies found</h2>
          </div>
        )}
      </div>
    </>
  );
};

export default App;
