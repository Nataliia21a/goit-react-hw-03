import css from "../SearchBox/SearchBox.module.css";

export default function SearchBox({ value, onFilter }) {
  return (
    <div className={css.searchBox}>
      <label className={css.searchLabel} htmlFor="">
        Find contact by name
      </label>
      <input
        className={css.searchInput}
        type="text"
        value={value}
        onChange={(evt) => onFilter(evt.target.value)}
      />
    </div>
  );
}
