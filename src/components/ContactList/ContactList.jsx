import Contact from "../Contact/Contact";
import css from "../ContactList/ContactList.module.css";

export default function ContactList({ lists, onDelete }) {
  return (
    <ul className={css.contactList}>
      {lists.map((list) => (
        <li key={list.id}>
          <Contact data={list} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
}
