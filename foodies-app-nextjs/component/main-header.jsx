import Link from "next/link";
import logoImg from "@/assets/logo.png";
import classes from "@/component/main-header.module.css";

export default function MainHeader() {
  return (
    <header className={classes.header}>
      <Link className={classes.logo} href="/">
        <img src={logoImg.src} alt="logo of website" />
        NextLevel Food
      </Link>
      <nav className={classes.nav}>
        <ul className={classes.ul}>
          <li>
            <Link href="/meals" className={classes.a}>
              Browse Meals
            </Link>
          </li>
          <li>
            <Link href="/community" className={classes.a}>
              Foodies Community
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
