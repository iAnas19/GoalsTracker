import React from "react";
import { useSelector } from "react-redux";
import GoalItem from "../components/GoalItem";
import { useNavigate } from "react-router-dom";
import Spinner from "../components/Spinner";

const Profile = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  const { isLoading, goals } = useSelector((state) => state.goals);
  if (isLoading) {
    return <Spinner />;
  }
  return (
    <>
      <section className="heading">
        <h1>
          Welcome to your Profile,{" "}
          <span className="name">{user.name.split(" ")[0] || user}</span>
        </h1>

        <div className="profile">
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <p>Total Goals: {goals.length}</p>
          <button
            className="btn btn-block"
            onClick={() => navigate("/underdevelopment")}
          >
            Change Info
          </button>
        </div>
      </section>
      <div className="heading">
        <label>Goal Section </label>
      </div>
      <div className="goals">
        {goals.map((goal) => (
          <GoalItem key={goal._id} goal={goal} />
        ))}
      </div>
    </>
  );
};

export default Profile;
