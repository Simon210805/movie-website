

import movies from '../data/movies.json'
import style from "../style.module.css"
import NavBar from "../../components/nav-bar"
import { Movie } from '../../components/movie';
export default async function about ({params}) {
  const movieTitle = params.movieTitle;
  const comvertedmovieTitle = movieTitle.splice(/%20/g,"+")
const res =await fetch("http://www.omdbapi.com/?t=${comvertedmovieTitle}&apikey=${process.env.MOVIE_API_KEY}")
const movieJson =await res.json ();
return <div>
      <NavBar/>
      <style.nav/>
     
      <Movie movie={movieJson}/>
        </div>
} 