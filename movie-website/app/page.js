import Link from 'next/link';
import style from './style.module.css'
import NavBar from './components/nav-bar';
import movies from "./data/movies.json"
import { Movie } from './components/movie';
import SearchMovie from "./search/page";
export default function HOME({params}) {
  // const movie = movies['0'];
  const movieList = movies.map((movie)=>{
    return <Movie movie={movie} key={movie.Title}/>
  })
    return <div>
        <NavBar/>
        <SearchMovie />
      <div className={style.movieList}>  {movieList}</div>
        </div>
}

