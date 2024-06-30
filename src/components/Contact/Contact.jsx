import { FaUser } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import css from "../Contact/Contact.module.css";

export default function Contact({ data, onDelete }) {
  const handleClick = () => {
    onDelete(data.id);
  };
  return (
    <div className={css.contactListItem}>
      <p>
        <FaUser />
        {data.name}
      </p>
      <p>
        <BsFillTelephoneFill />
        {data.number}
      </p>
      <button onClick={handleClick} type="button">
        Delete
      </button>
    </div>
  );
}
