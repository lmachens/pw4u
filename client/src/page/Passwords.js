import React from "react";
import { useQuery } from "react-query";
import { getPasswords } from "../api/passwords";

const Passwords = () => {
  const { isLoading, error, data: passwords } = useQuery(
    "passwords",
    getPasswords
  );

  if (isLoading) {
    return "Loading...";
  }

  if (error) {
    return `An error has occurred: ${error.message}`;
  }

  return (
    <div>
      <h2>Passwords</h2>
      <ul>
        {passwords.map((password) => (
          <li key={password}>{password}</li>
        ))}
      </ul>
    </div>
  );
};

export default Passwords;
