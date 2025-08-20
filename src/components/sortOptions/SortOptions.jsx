import styles from "./SortOptions.module.css";

export function SortOptions({ onSortChange }) {
  return (
    <div className={styles.container}>
      <label htmlFor="sort-select">SORT BY:</label>
      <select
        name="sortItems"
        id="sort-select"
        onChange={(e) => onSortChange(e.target.value)}
      >
        <option value="">--Choose an option--</option>
        <option value="type">By type</option>
        <option value="dateFromNew">By date, from new to old</option>
        <option value="dateFromOld">By date, from old to new</option>
        <option value="powerful">By sun flare power, from powerful</option>
        <option value="weak">By sun flare power, from weak to strong</option>
      </select>
    </div>
  );
}
