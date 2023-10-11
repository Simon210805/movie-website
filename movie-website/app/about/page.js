
import movies from '../data/movies.json'
import style from "../style.module.css"
import NavBar from "../components/nav-bar"
import { Movie } from '../components/movie';
export default  function about ( ) {
  return (
   <div className= {style.intro}> 
    <h1>ን 6ተ ሰሙን ዝከደ ዝወሰድናዮ course ምምዕባል software ምስ መምህር ናሆም ክንረኣብ!!</h1>
    <h2>web development course </h2>
    <li>HISTORY OF COMPUDER</li>
    <li>INTRODUCTION OF WEB DEVELOPMENT</li>
    <li>HTML</li>
    <li>CSS</li>
    <li>JAVASCRIPT</li>
    <p> ንናሆም ክንረኣብ ክትረክብዎ ምስ ትደልዩ "https://www.facebook.com/Nahom.Mehanzel" ኢልኩም ብ facebook ክትረክብዎ ትክእሉ ኢኩም!! </p>
   </div>
   
    
  );
} 