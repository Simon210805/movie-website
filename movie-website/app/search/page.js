"use client";
import { useState } from "react";
import { Movie } from "../components/movie";

export default function Search() {
  const [state, setState] = useState("");

  console.log("state", state);

  // Function
  const searchMovie = async (event) => {
    event.preventDefault();
    const searchTitle = event.target.movieTitle.value;

    if (searchTitle === "") {
      setState("");
      return;
    }

    const convertedMovieTitle = searchTitle.replace(/ /g, "+");

    const getMovieFromAPI = await fetch(
      `http://www.omdbapi.com/?t=${convertedMovieTitle}&apikey=95282d64`
    );

    const movieJson = await getMovieFromAPI.json();

    setState(movieJson);
  };

  return (
    <div>
      <form onSubmit={searchMovie}>
        <input
          type="text"
          name="movieTitle"
          id="movieTitle"
          placeholder="search for a movie"
        />
        <button type="submit">Search</button>
      </form>
      {state ? <Movie movie={state} /> : undefined}
      <br />
    </div>
  );
}
