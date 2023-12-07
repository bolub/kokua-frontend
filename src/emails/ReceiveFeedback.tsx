import * as React from "react";

interface ReceiveFeedbackProps {
  message: string;
}

export const ReceiveFeedback: React.FC<Readonly<ReceiveFeedbackProps>> = ({
  message,
}) => (
  <div>
    <h1>Hello, Bolu!</h1>

    <p
      style={{
        marginTop: "10px",
        marginBottom: "10px",
      }}
    >
      Someone sent you ReceiveFeedback
    </p>

    <div>
      <p>Message:</p>
      <p>
        <b>{message}</b>
      </p>
    </div>
  </div>
);
