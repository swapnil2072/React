import Link from "next/link";
import logoImg from "@/assets/logo.png";
import classes from "@/component/main-header.module.css";
import Image from "next/image";

export default function MainHeader() {
  return (
    <header className={classes.header}>
      <Link className={classes.logo} href="/">
        <Image
          src={logoImg.src}
          height={1000}
          width={1000}
          alt="logo of website"
          priority
        />
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
