import * as React from "react";

interface SuggestionResultProps {
  firstName: string;
  message: string;
}

export const SuggestionResult: React.FC<Readonly<SuggestionResultProps>> = ({
  firstName,
  message,
}) => (
  <div>
    <h1>Hello, {firstName}!</h1>

    <p>{message}</p>
  </div>
);
