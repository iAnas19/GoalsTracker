import React from "react";
// import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import image from "../images/PageNotFound.jpg";

const Error404 = () => {
  //   const onClick = () => {
  //     useNavigate("/");
  //   };
  const navigate = useNavigate();

  return (
    <>
      {" "}
      <div className="container">
        <div className="heading" style={{ marginTop: "-30px" }}>
          <h1>Page Not Found!</h1>
        </div>

        <img src={image} alt="404" />
        <div className="heading">
          <p style={{ margin: "-20px 0" }}>
            The page you're tring to visit does not exist
          </p>
        </div>
        <button className="btn btn-block" onClick={() => navigate("/")}>
          Go back!
        </button>
      </div>
    </>
  );
};

export default Error404;
