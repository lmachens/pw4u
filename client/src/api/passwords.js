export const getPassword = async (passwordName) => {
  const response = await fetch(`/api/passwords/${passwordName}`);
  if (!response.ok) {
    const message = await response.text();
    throw new Error(message);
  }
  const password = await response.text();
  return password;
};

export const deletePassword = async (passwordName) => {
  const response = await fetch(`/api/passwords/${passwordName}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    const message = await response.text();
    throw new Error(message);
  }
  const password = await response.json();
  return password;
};

export const getPasswords = async () => {
  const response = await fetch(`/api/passwords`);
  if (!response.ok) {
    const message = await response.text();
    throw new Error(message);
  }
  const passwords = await response.json();
  return passwords;
};
