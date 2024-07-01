export const maskEmail = (email: string) => {
  const maxLength = 5;
  const parts = email.split("@");
  const username = parts[0];
  const domain = parts[1];
  let maskedUsername: string;
  if (username.length <= maxLength) {
    maskedUsername =
      username[0] +
      "*".repeat(username.length - 2) +
      username[username.length - 1];
  } else {
    const visiblePart = username.slice(0, maxLength - 1);
    maskedUsername = visiblePart + "...";
  }

  return maskedUsername + "@" + domain;
};
