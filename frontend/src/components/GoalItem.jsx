import { useDispatch } from "react-redux";
import { deleteGoal } from "../features/goals/goalSlice";
import { toast } from "react-toastify";

const GoalItem = ({ goal }) => {
  const dispatch = useDispatch();

  return (
    <div className="goal">
      <div className="goal-text timezone">
        <div>
          {new Date(goal.createdAt)
            .toDateString()
            .substring(0, 10)
            .toLocaleString("en-PK")}{" "}
          {new Date(goal.createdAt)
            .getFullYear()
            .toLocaleString()
            .split(",")
            .join("")}{" "}
        </div>{" "}
        <div className="time">
          {new Date(goal.createdAt)
            .toLocaleTimeString()
            .replace(/([\d]+:[\d]{2})(:[\d]{2})(.*)/, "$1$3")
            .toLocaleString()}
        </div>
      </div>
      <h2 className="goal-text">{goal.text}</h2>
      <button
        onClick={() =>
          dispatch(deleteGoal(goal._id)) &&
          toast.success("Goal Deleted", { autoClose: 800 })
        }
        className="close"
      >
        X
      </button>
    </div>
  );
};

export default GoalItem;
