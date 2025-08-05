export function SortOptions({ onSortChange }) {
  return (
    <>
      <label htmlFor="sort-select">sort by:</label>
      <select
        name="sortItems"
        id="sort-select"
        onChange={(e) => onSortChange(e.target.value)}
      >
        <option value="">--Please choose an option--</option>
        <option value="dateFromNew">By date, from new to old</option>
        <option value="dateFromOld">By date, from old to new</option>
        <option value="type">By type</option>
        <option value="powerful">By sun flare power, from powerful</option>
        <option value="weak">By sun flare power, from weak to strong</option>
      </select>
    </>
  );
}
