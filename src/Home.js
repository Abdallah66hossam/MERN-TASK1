import React from "react";
import NavBar from "./components/Header/NavBar";
import Banner from "./components/Header/Banner";
import FilterDesc from "./components/Posts/FilterDesc";
import Posts from "./components/Posts/Post1";
import AsidePosts from "./components/Posts/AsidePosts";
import { users } from "./lib/users";
import styles from "./components/Posts/styles/feed.module.scss";
import FilterMobile from "./components/Posts/FilterMobile";

const Home = () => {
  const loggedIn = true;

  return (
    <main>
      <NavBar loggedIn={loggedIn} />
      <Banner />
      <section className={`${styles.feed} w-full`}>
        <FilterDesc loggedIn={loggedIn} />
        <FilterMobile />
        <section className="d-flex justify-content-between">
          <Posts />
          <AsidePosts users={users} loggedIn={loggedIn} />
        </section>
      </section>
    </main>
  );
};

export default Home;
