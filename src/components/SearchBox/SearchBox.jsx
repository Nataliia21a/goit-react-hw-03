export default function SearchBox({ value, onFilter }) {
  return (
    <label htmlFor="">
      Find contact by name
      <input
        type="text"
        value={value}
        onChange={(evt) => onFilter(evt.target.value)}
      />
    </label>
  );
}
