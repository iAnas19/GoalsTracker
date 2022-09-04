import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import GoalItem from "../components/GoalItem";
import Spinner from "../components/Spinner";
import { getGoals } from "../features/goals/goalSlice";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { goals, isLoading, isError, message } = useSelector(
    (state) => state.goals
  );

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    if (!user) {
      navigate("/login");
      document.title =
        "GoalSetter - Application for writing and achieving goals";
    } else {
      document.title = `${user.name}'s Dashboard - GoalSetter`;
    }

    dispatch(getGoals());

    // return () => {
    //   dispatch(reset());
    // };
  }, [user, navigate, isError, message, dispatch]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <section className="heading">
        <h1>
          Welcome to the dashboard,{" "}
          <span className="name">{user && user.name}</span>
        </h1>
      </section>

      <section className="content">
        {goals.length > 0 ? (
          <div className="goals">
            {goals.map((goal) => (
              <GoalItem key={goal._id} goal={goal} />
            ))}
          </div>
        ) : (
          <h3>You have not set any goals</h3>
        )}
      </section>
      <div className="icon-container">
        <Link to="/form">
          <h1 className="icon">
            <FaPlus />
          </h1>
        </Link>
      </div>
    </>
  );
};

export default Dashboard;
