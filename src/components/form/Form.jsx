import { useId } from "react";

export function Form() {
  const pastDateId = useId();
  const currentId = useId();
  return (
    <>
      <form>
        <div>
          <label htmlFor={pastDateId}>
            <input type="text" id={pastDateId} />
          </label>
          <label htmlFor={currentId}>
            <input type="text" id={currentId} />
          </label>
          <button type="submit">Find events</button>
        </div>
      </form>
    </>
  );
}
