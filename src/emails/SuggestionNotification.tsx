import * as React from "react";

interface SuggestionNotificationProps {
  firstName: string;
  details: {
    title: string;
    subtitle: string;
    url: string;
  };
  isAdmin?: boolean;
  resourceId?: string;
}

export const SuggestionNotification: React.FC<
  Readonly<SuggestionNotificationProps>
> = ({ firstName, details, isAdmin, resourceId }) => (
  <div>
    <h1>Hello, {firstName}!</h1>

    <p
      style={{
        marginTop: "10px",
        marginBottom: "10px",
      }}
    >
      {!isAdmin
        ? "Your suggestion was received. We'll check as soon as we can."
        : `New suggestion, please review: https://kokua.wiki/studio/structure/suggestion;${resourceId}`}
    </p>

    <div>
      <p>
        Resource title: <b>{details.title}</b>
      </p>
      <p>
        Resource subtitle: <b>{details.subtitle}</b>
      </p>
      <p>
        Resource url: <b>{details.url}</b>
      </p>
    </div>
  </div>
);
