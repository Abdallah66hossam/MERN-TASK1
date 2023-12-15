//  import styles
import styles from "./styles/bannner.module.scss";
// import images
import heroDesk from "../../assets/hero.png";
import heroMobile from "../../assets/hero2.png";
// import react hooks

const Banner = () => {
  return (
    <section
      className={`position-relative top-0 ${styles.banner}`}
      style={{
        backgroundImage: `url(${heroDesk})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className={styles.blackOpacity} />
      <div className={`${styles.textBanner}`}>
        <h1 className={`${styles.header}`}>Computer Engineering</h1>
        <p className={`${styles.description}`}>
          142,765 Computer Engineers follow this
        </p>
      </div>
    </section>
  );
};

export default Banner;
