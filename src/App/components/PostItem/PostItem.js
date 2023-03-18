import { useNavigate } from "react-router";
import { Stack, Typography, Divider } from "@mui/material";

const PostItem = ({ postTitle, postText, id }) => {
  const navigate = useNavigate();

  const navigateToHandler = (id) => {
    navigate(`/${id}`);
  };

  return (
    <Stack
      direction="column"
      sx={{ paddingBottom: 2, cursor: "pointer" }}
      onClick={() => {
        navigateToHandler(id);
      }}
    >
      <Typography
        gutterBottom
        variant="h5"
        color="primary"
        sx={{ textDecoration: "underline" }}
      >
        {postTitle}
      </Typography>
      <Typography gutterBottom variant="body1">
        {postText}
      </Typography>
      <Divider />
    </Stack>
  );
};

export default PostItem;
