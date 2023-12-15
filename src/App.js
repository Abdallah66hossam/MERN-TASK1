// import styles
import styles from "./components/Posts/styles/feed.module.scss";
// import componenets
import Banner from "./components/Header/Banner";
import NavBar from "./components/Header/NavBar";
import FilterDesc from "./components/Posts/FilterDesc";
import Posts from "./components/Posts/Post1";
import AsidePosts from "./components/Posts/AsidePosts";

function App() {
  let loggedIn = false;
  return (
    <main>
      <NavBar loggedIn={loggedIn} />
      <Banner />
      <section className={`${styles.feed} w-full`}>
        <FilterDesc loggedIn={loggedIn} />
        <section className="d-flex justify-content-between">
          <Posts />
          <AsidePosts loggedIn={loggedIn} />
        </section>
      </section>
    </main>
  );
}

export default App;
