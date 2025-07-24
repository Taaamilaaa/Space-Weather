import { Form } from "../form/Form";

export function FormSection({ todayDate, pastDate }) {
  return (
    <>
      <div>
        <h2>Today: {todayDate}</h2>
        <p>
          You can choose any time period from {pastDate} to {todayDate}
        </p>
        <Form />
      </div>
    </>
  );
}
