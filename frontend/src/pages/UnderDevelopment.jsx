import React from "react";
import { useNavigate } from "react-router-dom";
import image from "../images/Construction.jpg";
import Spinner from "../components/Spinner";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const UnderDevelopment = () => {
  const navigate = useNavigate();
  const { isLoading } = useSelector((state) => state.goals);
  useEffect(() => {
    if (isLoading) {
      return <Spinner />;
    }
  });

  return (
    <>
      {" "}
      <div className="container">
        <div className="heading" style={{ marginTop: "-30px" }}>
          <h1>Under Development!</h1>
        </div>

        <img src={image} alt="Development" className="images" />
        <div className="heading">
          <p style={{ margin: "-20px 0" }}>
            Sorry, We are still working on this feature😢
          </p>
        </div>
        <button className="btn btn-block" onClick={() => navigate("/")}>
          Go back!
        </button>
      </div>
    </>
  );
};

export default UnderDevelopment;
