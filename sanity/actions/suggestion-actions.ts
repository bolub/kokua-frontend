export function AcceptResourceSuggestion() {
  return {
    label: "Accept resource suggestion",
    onHandle: () => {
      // Here you can perform your actions
      window.alert("👋 Hello from custom action");
    },
  };
}

export function RejectResourceSuggestion() {
  return {
    label: "Reject resource suggestion",
    onHandle: () => {
      // Here you can perform your actions
      window.alert("👋 Hello from custom action rejection");
    },
  };
}
