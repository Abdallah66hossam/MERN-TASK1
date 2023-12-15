import React, { useState } from "react";
import profile1 from "../../assets/profile1.png";
import profile2 from "../../assets/profile2.png";
import profile3 from "../../assets/profile3.png";
import profile4 from "../../assets/profile4.png";
import human2 from "../../assets/human2.png";

const Users = ({ users }) => {
  const [seeMore, setSeeMore] = useState(false);
  return (
    <div className="position-relative">
      <div className="d-flex justify-content-between w-full mt-4">
        <div className="d-flex gap-3 align-items-center">
          <img width={50} height={50} src={profile1} alt="profile photo" />
          <h3 className="" style={{ fontSize: "14px", fontWeight: "400" }}>
            Leisure
          </h3>
        </div>
        <button
          className="btn rounded-4 px-4 h-50"
          style={{ backgroundColor: "#EDEEF0", fontSize: "12px" }}
        >
          Follow
        </button>
      </div>
      <div className="d-flex justify-content-between w-full mt-4">
        <div className="d-flex gap-3 align-items-center">
          <img width={50} height={50} src={profile4} alt="profile photo" />
          <h3 className="" style={{ fontSize: "14px", fontWeight: "400" }}>
            Activism
          </h3>
        </div>
        <button
          className="btn rounded-4 px-4 h-50"
          style={{ backgroundColor: "#EDEEF0", fontSize: "12px" }}
        >
          Follow
        </button>
      </div>
      <div className="d-flex justify-content-between w-full mt-4">
        <div className="d-flex gap-3 align-items-center">
          <img width={50} height={50} src={profile1} alt="profile photo" />
          <h3 className="" style={{ fontSize: "14px", fontWeight: "400" }}>
            MBA
          </h3>
        </div>
        <button
          className="btn rounded-4 px-4 h-50"
          style={{ backgroundColor: "#EDEEF0", fontSize: "12px" }}
        >
          Follow
        </button>
      </div>
      <div className="d-flex justify-content-between w-full mt-4">
        <div className="d-flex gap-3 align-items-center">
          <img width={50} height={50} src={profile2} alt="profile photo" />
          <h3 className="" style={{ fontSize: "14px", fontWeight: "400" }}>
            Philosophy
          </h3>
        </div>
        <button
          className="btn rounded-4 px-4 h-50"
          style={{ backgroundColor: "#EDEEF0", fontSize: "12px" }}
        >
          Follow
        </button>
      </div>
      {seeMore && (
        <div>
          <div className="d-flex justify-content-between w-full mt-4">
            <div className="d-flex gap-3 align-items-center">
              <img width={50} height={50} src={profile3} alt="profile photo" />
              <h3 className="" style={{ fontSize: "14px", fontWeight: "400" }}>
                Leisure
              </h3>
            </div>
            <button
              className="btn rounded-4 px-4 h-50"
              style={{ backgroundColor: "#EDEEF0", fontSize: "12px" }}
            >
              Follow
            </button>
          </div>
          <div className="d-flex justify-content-between w-full mt-4">
            <div className="d-flex gap-3 align-items-center">
              <img width={50} height={50} src={human2} alt="profile photo" />
              <h3 className="" style={{ fontSize: "14px", fontWeight: "400" }}>
                Leisure
              </h3>
            </div>
            <button
              className="btn rounded-4 px-4 h-50"
              style={{ backgroundColor: "#EDEEF0", fontSize: "12px" }}
            >
              Follow
            </button>
          </div>
          <div className="d-flex justify-content-between w-full mt-4">
            <div className="d-flex gap-3 align-items-center">
              <img width={50} height={50} src={profile1} alt="profile photo" />
              <h3 className="" style={{ fontSize: "14px", fontWeight: "400" }}>
                Leisure
              </h3>
            </div>
            <button
              className="btn rounded-4 px-4 h-50"
              style={{ backgroundColor: "#EDEEF0", fontSize: "12px" }}
            >
              Follow
            </button>
          </div>
        </div>
      )}
      <a
        className="text-primary position-absolute mt-3"
        style={{ cursor: "pointer", right: "0" }}
        onClick={() => setSeeMore(!seeMore)}
      >
        {seeMore ? "see less" : "see more"}
      </a>
    </div>
  );
};

export default Users;
