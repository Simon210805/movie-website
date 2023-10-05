import Link from 'next/link';
import style from './style.module.css'
import NavBar from './components/nav-bar';
import movies from "./data/movies.json"
import { Movie } from './components/movie';
export default function HOME(params) {
  const movie = movies['0'];
  const movieList = movies.map((movie)=>{
    return <Movie movie={movie} key={movie.Title}/>
  })
    return <div>
        <NavBar/>
      <div style={{display: "flex"}}>  {movieList}</div>
        </div>
}

