import { FETCH_POSTS, NEW_POST } from "./types";

export const fetchPost = () => (dispatch) => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((posts) => posts.json())
    .then((data) =>
      dispatch({
        type: FETCH_POSTS,
        payload: data,
      })
    );
};

export const createPost = (postData) => (dispatch) => {
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(postData),
  })
    .then((postData) => postData.json())
    .then((data) =>
      dispatch({
        type: NEW_POST,
        payload: data,
      })
    );
};
