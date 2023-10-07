import Link from "next/link";
import style from "../style.module.css";
export default function NavBar() {
  return (
    <div>
      <div className={style.nav}>
        <Link href="/">
          <div>Home</div>
        </Link>
        <Link href="/about">
          <div>About</div>
        </Link>
        <Link href="/contact">
          <div>Contact Us</div>
        </Link>
      </div>
    </div>
  );
}
