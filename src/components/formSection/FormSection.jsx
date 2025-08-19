import { Form } from "../form/Form";
import styles from "./FormSection.module.css";

export function FormSection({ todayDate, today, maxPastDate, onFormSubmite }) {
  return (
    <>
      <div className={styles.section}>
        <div className={styles.textContainer}>
          <h1>Today: {todayDate}</h1>
          <p>Enter a date range and select events.</p>
        </div>

        <Form
          onFormSubmite={onFormSubmite}
          today={today}
          maxPastDate={maxPastDate}
        />
      </div>
    </>
  );
}
