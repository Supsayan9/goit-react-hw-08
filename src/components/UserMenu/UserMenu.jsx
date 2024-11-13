import s from "./UserMenu.module.css";
import { selectUser } from "../../redux/auth/selectors";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/auth/operations";

const UserMenu = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  return (
    <div className={s.rightLinks}>
      <p className={s.msgDiv}>
        {" "}
        Welcome, {user.name}
      </p>

      <button
        className={s.btn}
        onClick={() => dispatch(logout())}
      >
        Exit
      </button>
    </div>
  );
};

export default UserMenu;
