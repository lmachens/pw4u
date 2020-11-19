import React from "react";
import { useQuery, useMutation, useQueryCache } from "react-query";
import { deletePassword, getPassword } from "../api/passwords";

const Password = ({ passwordName }) => {
  const queryCache = useQueryCache();

  const { isLoading, error, data } = useQuery(passwordName, () =>
    getPassword(passwordName)
  );
  const [doDeletePassword] = useMutation(() => deletePassword(passwordName), {
    onSuccess: () => {
      queryCache.invalidateQueries("passwords");
    },
  });

  if (isLoading) {
    return "Loading...";
  }

  if (error) {
    return `An error has occurred: ${error.message}`;
  }

  return (
    <div>
      <b>{passwordName}:</b> {data}
      <button onClick={doDeletePassword}>DELETE</button>
    </div>
  );
};

export default Password;
