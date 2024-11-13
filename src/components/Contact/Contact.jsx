import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import s from "./Contact.module.css";
import { FaUser } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <div className={s.wrapper}>
      <li className={s.listItem}>
        <p className={s.paragraph}>
          <span>
            <FaUser className={s.icon} />
            {name}
          </span>
          <span>
            <BsFillTelephoneFill
              className={s.icon}
            />{" "}
            {number}
          </span>
        </p>
        <button
          type="button"
          className={s.btn}
          onClick={() =>
            dispatch(deleteContact(id))
          }
        >
          Delete
        </button>
      </li>
    </div>
  );
};

export default Contact;
