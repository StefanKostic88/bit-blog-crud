export const generatePostData = ({ title, body, userId, id }) => ({
  postTitle: title,
  postText: body,
  userId,
  id,
});
