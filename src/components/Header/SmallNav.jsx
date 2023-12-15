// import styles
import { useNavigate, useRoutes } from "react-router-dom";
import styles from "./styles/navbar.module.scss";
// import react icons
import { IoArrowBackOutline } from "react-icons/io5";
import { open } from "../../redux/formSlice";
import { useDispatch } from "react-redux";

const SmallNav = ({ loggedIn }) => {
  const dispatch = useDispatch();
  const router = useNavigate();
  return (
    <nav
      className={`d-none ${styles.mobileNav} bg-transparent d-flex justify-content-between align-items-center px-4 py-3 position-absolute w-100`}
    >
      <IoArrowBackOutline color="#fff" size={23} />
      <button
        className="bg-transparent border border-white rounded pointer-event text-white px-3 py-2"
        onClick={loggedIn ? () => router("/") : () => dispatch(open())}
      >
        {loggedIn ? "Leave Group" : "Join Group"}
      </button>
    </nav>
  );
};

export default SmallNav;
