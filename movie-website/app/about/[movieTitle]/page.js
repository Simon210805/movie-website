
import movies from '../data/movies.json'
import style from "../style.module.css"
import NavBar from "../../components/nav-bar"
import { Movie } from '../../components/movie';
export default  function about ({params}) {
  const movieTitle = params.movieTitle;
  const comvertedmovieTitle = movieTitle.splice(/%20/g,"+")
const res = fetch("http://www.omdbapi.com/?t=${comvertedmovieTitle}&apikey=95282d64")
const movieJson = res.json ();
return <div>
      <NavBar/>
      <style.nav/>
     
      <Movie movie={movieJson}/>
        </div>
} 