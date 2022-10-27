// set the local storage properties here
export const buildStorage = () => {
  const { catImage, upVote, downVote, comments } = localStorage;

  // this is evaluating the local storage items above and acting like an inline if else statement
  // catImage example: if we have a catImage in local storage then set it. Otherwise create the key in 
  // local storage but set the value as an empty string. If any more storage properties are needed then 
  // you can add them using the following syntax below. Note that any data structures must be stringified and parsed during retrieval
  localStorage.setItem("catImage", catImage ? catImage : "");
  localStorage.setItem("upVote", upVote ? upVote : 0);
  localStorage.setItem("downVote", downVote ? downVote : 0);
  localStorage.setItem("comments", comments ? comments : JSON.stringify([]));
};

// resets local storage values
export const clearStorageValues = () => {
  localStorage.clear();
  buildStorage();
};
