import { useId } from "react";
import { Button } from "../button/Button";
import styles from "./Form.module.css";

export function Form({ onFormSubmite, maxPastDate, today }) {
  const maxPastDateId = useId();
  const currentId = useId();

  const handleSubmit = (evt) => {
    evt.preventDefault();

    const form = evt.target;
    const { startDate, endDate, gst, flr, sep, mpc, rbe, hss } = form.elements;
    const date = {
      startD: startDate.value,
      endD: endDate.value,
    };
    const eType = [gst, flr, sep, mpc, rbe, hss]
      .filter((e) => e.checked)
      .map((e) => e.value);

    onFormSubmite(date, eType);
    form.reset();
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className={styles.container}>
          <label htmlFor={maxPastDateId}>
            from:
            <input
              type="date"
              id={maxPastDateId}
              name="startDate"
              placeholder={maxPastDate}
              className={styles.date}
            />
          </label>
          <label htmlFor={currentId}>
            to:
            <input
              type="date"
              id={currentId}
              name="endDate"
              placeholder={today}
              className={styles.date}
            />
          </label>
        </div>
        <div className={styles.container}>
          <label>
            <input type="checkbox" name="gst" value="GST" />
            Geo storm
          </label>
          <label>
            <input type="checkbox" name="flr" value="FLR" />
            Sun flare
          </label>
          <label>
            <input type="checkbox" name="sep" value="SEP" />
            Solar energetic particle
          </label>
          <label>
            <input type="checkbox" name="mpc" value="MPC" />
            Magnetopause crossing
          </label>
          <label>
            <input type="checkbox" name="rbe" value="RBE" />
            Radiation belt enhancement
          </label>
          <label>
            <input type="checkbox" name="hss" value="HSS" />
            Hight speed stream
          </label>
        </div>
        <div className={styles.submitBtn}>
          <Button type="submit">Find events</Button>
        </div>
      </form>
    </>
  );
}
