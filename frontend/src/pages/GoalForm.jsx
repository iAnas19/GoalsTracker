import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Spinner from "../components/Spinner";
import { getGoals, reset } from "../features/goals/goalSlice";
import { createGoal } from "../features/goals/goalSlice";
import { toast } from "react-toastify";

const GoalForm = () => {
  const navigate = useNavigate();
  const [text, setText] = useState("");

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();

    if (text !== "") {
      dispatch(createGoal({ text }));
      setText("");
      toast.success("Goal Added", { autoClose: 900 });
      navigate("/");
    } else {
      toast.error("Enter your Goal", { autoClose: 1200 });
    }
  };

  const { user } = useSelector((state) => state.auth);
  const { isLoading, isError, message } = useSelector((state) => state.goals);

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    if (!user) {
      navigate("/login");
    }

    dispatch(getGoals());

    return () => {
      dispatch(reset());
    };
  }, [user, navigate, isError, message, dispatch]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <div className="heading">
        <h1>Write your Goal</h1>
      </div>
      <section className="form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="text"
              id="text"
              value={text}
              placeholder="write your goal"
              onChange={(e) => setText(e.target.value)}
              className="input"
            />
          </div>
          <div className="form-group">
            <button className="btn btn-block" type="submit">
              Add Goal
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default GoalForm;
