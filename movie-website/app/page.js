import style from "./style.module.css";

import { Movie } from "./components/movie";
import movies from "./data/movies.json";
import SearchMovie from "./search/page";

export default function HOME({ params }) {
  // const movie = movies['0'];
  const movieList = movies.map((movie) => {
    return <Movie movie={movie} key={movie.Title} />;
  });
  return (
    <div>
      <SearchMovie />

      <div className={style.movieList}> {movieList}</div>
    </div>
  );
}
