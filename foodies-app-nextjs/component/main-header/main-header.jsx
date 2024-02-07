import Link from "next/link";
import logoImg from "@/assets/logo.png";
import classes from "@/component/main-header/main-header.module.css";
import Image from "next/image";
import MainHeaderBackground from "@/component/main-header/main-header-background";
import Navlink from "./nav-link";

export default function MainHeader() {
  return (
    <>
      <MainHeaderBackground></MainHeaderBackground>
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
              <Navlink href="/meals">Browse Meals</Navlink>
            </li>
            <li>
              <Navlink href="/community">Foodies Community</Navlink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
