"use client";
import { useState } from "react";
import { Movie } from "../components/movie";
  import {AiOutlineSearch} from 'react-icons/ai'
  import style from "../style.module.css"
export default function Search({apiKey}) {
  const [state, setState] = useState("");

  // Function
  const searchMovie = async (event) => {
    event.preventDefault();
    const searchTitle = event.target.movieTitle.value;

    if (searchTitle === "") {
      setState("");
      return;
    }
// console.log('MOVIE_API_KEY',process.env.MOVIE_API_KEY)
    const convertedMovieTitle = searchTitle.replace(/ /g, "+");

    const getMovieFromAPI = await fetch(
     `http://www.omdbapi.com/?t=${convertedMovieTitle}&apikey=${apiKey}`
    );

    const movieJson = await getMovieFromAPI.json();

    setState(movieJson);
  };

  return (
    <div>
    <div className={style.container}>
      <form onSubmit={searchMovie}>
        <input
          type="text"
          name="movieTitle"
          id="movieTitle"
          placeholder="search for a movie"
        />
        <button type="submit">
        <AiOutlineSearch/>
        </button>
      </form>
      {state ? <Movie movie={state} /> : undefined}
     
      </div>
    </div>
  );
}
