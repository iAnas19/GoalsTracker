import React from "react";
import image from "../images/ContactUs.svg";
import Spinner from "../components/Spinner";
import { useSelector } from "react-redux";

const ContactUs = () => {
  const { isLoading } = useSelector((state) => state.goals);
  if (isLoading) {
    return <Spinner />;
  }
  return (
    <div className="container">
      <section className="heading" style={{ marginTop: "-30px" }}>
        <h1>Want to discuss a problem?</h1>
      </section>

      <img src={image} alt="Contact" />
      <button
        className="btn btn-block"
        onClick={() => {
          window.open("mailto:anasarif216@gmail.com");
        }}
      >
        Email now
      </button>
    </div>
  );
};

export default ContactUs;
