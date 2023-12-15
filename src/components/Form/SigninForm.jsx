import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "./styles/signup.module.scss";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { IoCloseCircle } from "react-icons/io5";
import facebook from "../../assets/facebook.png";
import google from "../../assets/google.png";
import { useDispatch } from "react-redux";
import { changeFormState, close } from "../../redux/formSlice";
import Illustration from "./Illustration";
import { useFormik } from "formik";
import { signinSchema } from "../../schemas";

const SigninForm = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  const [showEye, setShowEye] = useState(false);
  let [mobile, setMobile] = useState(true);

  useEffect(() => {
    if (window.screen.width > 992) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  }, []);
  const initialValues = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
    useFormik({
      initialValues,
      validationSchema: signinSchema,
      onSubmit: (_, { resetForm }) => {
        resetForm();
        dispatch(close());
      },
    });
  return (
    <section className={styles.signup} data-aos="fade-up">
      <div className={styles.boxModel}>
        <IoCloseCircle
          className={styles.close}
          onClick={() => dispatch(close())}
        />
        {mobile && (
          <div className={`alert alert-success ${styles.alert}`} role="alert">
            Let{"'"}s learn, share & inspire each other with our passion for
            computer engineering. Sign up now 🤘🏼
          </div>
        )}
        <div className={styles.main}>
          <form
            onSubmit={handleSubmit}
            className={`${styles.form} ${styles.signin}`}
          >
            <h1>Sign In</h1>
            <input
              placeholder="Email"
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className={errors.email && touched.email ? styles.errs : ""}
            />
            <div
              style={{
                display: "flex",
              }}
            >
              <input
                type={!showEye ? "password" : "text"}
                placeholder="Password"
                name="password"
                className={`${styles.password} ${
                  errors.password && touched.password ? styles.errs : ""
                }`}
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                style={{ borderBottom: "1px solid #D9D9DB" }}
              />
              {!showEye ? (
                <AiOutlineEye
                  className={styles.eye}
                  cursor={"pointer"}
                  onClick={() => setShowEye(!showEye)}
                />
              ) : (
                <AiOutlineEyeInvisible
                  className={styles.eye}
                  cursor={"pointer"}
                  onClick={() => setShowEye(!showEye)}
                />
              )}
            </div>
            <div className={styles.submitMobile}>
              <button className={`${styles.submit} btn`} type="submit">
                Sign In
              </button>
              <a href={"/"} onClick={() => dispatch(changeFormState("signin"))}>
                or, Create Account
              </a>
            </div>
            <button className={`${styles.accEmail} btn`}>
              <img src={facebook} alt="facebook logo" />
              Sign in with Facebook
            </button>
            <button className={`${styles.accEmail} btn`}>
              <img src={google} alt="google logo" />
              Sign in with Google
            </button>
            <img href={"/"} className={styles.forget}>
              Forgot Password?{" "}
            </img>
          </form>
          <Illustration />
        </div>
      </div>
    </section>
  );
};

export default SigninForm;
