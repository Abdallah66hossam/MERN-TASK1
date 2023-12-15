//  import styles
import styles from "./styles/feed.module.scss";
// import react icons
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { BsShareFill, BsCalendarEvent } from "react-icons/bs";
import { BiShoppingBag } from "react-icons/bi";
import { AiOutlineEye } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { posts } from "../../lib/posts";
import img1 from "../../assets/img1.png";
import img2 from "../../assets/img2.png";
import img3 from "../../assets/img3.png";

const Posts = () => {
  return (
    <main className={styles.posts}>
      {posts?.map((post, i) => {
        return (
          <section className={`my-3 ${styles.card}`} key={post.id}>
            <img src={img1} alt="post img" className="w-100" height={200}></img>

            <h3 className={styles.category}>{post?.category}</h3>
            <div className={styles.title}>
              <h2>{post?.title}</h2>
              <BiDotsHorizontalRounded size={27} className={styles.dotes} />
            </div>
            {post.description && (
              <p className={styles.description}>{post?.description}</p>
            )}
            {post?.detail && (
              <div className={styles.detail}>
                <p
                  style={{ display: "flex", alignItems: "center", gap: "8px" }}
                >
                  {post.category === "💼️ Job" ? (
                    <BiShoppingBag />
                  ) : (
                    <BsCalendarEvent />
                  )}
                  {post?.detail}
                </p>
                <p
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <GoLocation />
                  {post?.location}
                </p>
              </div>
            )}

            {post?.category === "💼️ Job" || post?.category === "🗓️ Meetup" ? (
              <div className={styles.buttonJOB}>
                <button
                  className={`w-100 rounded-4 py-3 bg-transparent border ${
                    post?.category === "💼️ Job"
                      ? "text-success"
                      : "text-danger"
                  }`}
                >
                  {post?.category === "💼️ Job"
                    ? "Apply on Timesjobs"
                    : "Visit Website"}
                </button>
              </div>
            ) : (
              ""
            )}

            <div className={styles.profile}>
              <div className={styles.profileInfo}>
                <img alt="profileImage" src={post?.profileImage} />
                <h4>{post?.name}</h4>
              </div>
              <div className={styles?.details}>
                <AiOutlineEye />
                <span>1.4k views</span>
                <BsShareFill className={styles.share} />
              </div>
            </div>
          </section>
        );
      })}
    </main>
  );
};

export default Posts;
