import style from "../style.module.css"
import NavBar from "../components/nav-bar"
export default function contact() {
    return <div  className={style.con}>
         
        <h1>User Name</h1>
       <form>
       <input  type="text" 
        name="user name"
        id="user name"
        placeholder="user name"
       />
          <h1>Last Name</h1>
          <input  type="text" 
        name="last name"
        id="last name"
        placeholder="last name"
       />
        <h1>Email</h1>
        <input  type="text" 
        name="Email"
        id="Email"
        placeholder="Email"
       />
         <button type="Send">Send</button>
       
       
       </form>
        </div>
} 