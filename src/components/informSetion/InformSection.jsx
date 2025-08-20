import styles from "./InformSection.module.css";
export function InformSection({
  loading,
  data,
  startD,
  endD,
  eventsFlag,
  error,
}) {
  return (
    <div className={styles.container}>
      {loading && <p>Loading data, please wait...</p>}
      {data && (
        <p>
          From {startD} to {endD} we find <span>{data.length} events</span>.
        </p>
      )}
      {eventsFlag && (
        <p>
          There are no events from {startD} to {endD}
        </p>
      )}
      {error && (
        <p>Whoops, something went wrong! Please try reloading this page!</p>
      )}
    </div>
  );
}
