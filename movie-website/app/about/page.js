
import movies from '../data/movies.json'
import style from "../style.module.css"
import NavBar from "../components/nav-bar"
import { Movie } from '../components/movie';
export default  function about ( ) {
  console.log('MOVIE_API_KEY',process.env.MOVIE_API_KEY)
  return (
   <div className= {style.intro}> 
    <h1>ን 6ተ ሰሙን ዝከደ ዝወሰድናዮ course ምምዕባል software ምስ መምህር ናሆም ክንረኣብ!!</h1>
    <h1>web development course </h1>
    <li>HISTORY OF COMPUDER</li>
    <li>INTRODUCTION OF WEB DEVELOPMENT</li>
    <li>HTML</li>
    <li>CSS</li>
    <li>JAVASCRIPT</li>
    <p>ነዚ ትምህርቲ እዚ ብምውሳደይ ኣነ ብጣዕሚ ሕጉስ ኢየ መምህር ናሆም ኣብ ናይ ትምህርቲ ሰዓታት ጥራይ ዘይኮነ
       ካብ ናይ ትምህርቲ ሰዓታት መጻኢ ውን ግዚኡ ሰዊኡ ሓጊዙና ኢዩ ስለ ኩሉ ነገር ብልቢ የመስግን!! </p>
    <p> ንናሆም ክንረኣብ ክትረክብዎ ምስ ትደልዩ "https://www.facebook.com/Nahom.kibreab(nknahom)" ኢልኩም ብ facebook ክትረክብዎ ትክእሉ ኢኩም!! </p>
   </div>
   
    
  );
} 