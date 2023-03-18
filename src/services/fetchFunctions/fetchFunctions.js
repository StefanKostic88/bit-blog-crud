import { generatePostData } from "../../enitities/heleperFunctions/heleperFunctions";

export const getPostsData = async (setState) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const data = await res.json();
  setState(() => [...data.map((object) => generatePostData(object))]);
};

export const getAllUsers = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const data = await res.json();
  console.log(data);
};

getAllUsers();
