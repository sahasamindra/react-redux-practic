import React, { useReducer, useEffect } from "react";

let initialState = {
  loading: true,
  error: "",
  post: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SUCCESS":
      return {
        loading: false,
        error: "",
        post: action.result,
      };
    case "ERROR":
      return {
        loading: false,
        error: "Something went wrong!!!",
        post: {},
      };

    default:
      return state;
  }
};

export default function UseReducerComponent() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        dispatch({ type: "SUCCESS", result: data });
      })
      .catch(() => {
        dispatch({ type: "ERROR" });
      });
    return () => {};
  }, []);

  return (
    <div>
      <h2>{state.loading ? "Loading..." : null}</h2>
      <h2>{state.error || null}</h2>
      <h2>{state.post.title}</h2>
      <p>{state.post.body}</p>
    </div>
  );
}
