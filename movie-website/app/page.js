import Link from 'next/link';
import style from './style.module.css'
export default function HOME(params) {
    return <div>
        <div className={style.nav}> 
        <div>
        <Link href='/'>Home</Link>
      </div>
      <div>
      <Link href='/'>About</Link>
      </div> 
      <div>
          <Link href='/'>Contsct Us</Link>
      </div>
        </div>
        
        Movie Website</div>
}