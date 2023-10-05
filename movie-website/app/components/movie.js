import style from "../style.module.css"
import Image from "next/image"
export const Movie = ({movie}) => {
    return (<div className={style.movieList}>
        <div>
        <h1>{movie.Title}</h1>
    <p>{movie.Runtime}</p>
    <p>{movie.Genre}</p>
    <Image src={movie.Poster} alt={movie.Title} width={200} height={300}/>
        </div>
    </div>);
}