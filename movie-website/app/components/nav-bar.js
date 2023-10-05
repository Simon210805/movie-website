import Link from "next/link";
import style from "../style.module.css"
export default function NavBar() {
    return (<div>
        <div className={style.nav}> 
<div>
<Link href='/'>Home</Link>
</div>
<div>
<Link href='/about'>About</Link>
</div> 
<div>
  <Link href='/contact'>Contact Us</Link>
</div>
</div>
        </div>);
}