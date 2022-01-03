import { useState } from "react";

export const useForm = values => {
  const [state, setState] = useState(values);

  return [
    state,
    function (e) {
      setState({ ...state, [e.target.name]: e.target.value });
    }
  ];
};
