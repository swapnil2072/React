import classes from "@/app/meals/page.module.css";
import MealsGrid from "@/component/meals/meals-grid";
import { getMeals } from "@/lib/meals";
import Link from "next/link";

export default async function MealsPage() {
  const meals = await getMeals();
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meals, created{" "}
          <span className={classes.highlight}>by you</span>
        </h1>
        <p>
          Choose your favorite recipe and cook it yourself. It is easy and fun!
        </p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share your favorite Recipe</Link>
        </p>
      </header>
      <main className={classes.main}>
        <MealsGrid meals={meals}></MealsGrid>
      </main>
    </>
  );
}
