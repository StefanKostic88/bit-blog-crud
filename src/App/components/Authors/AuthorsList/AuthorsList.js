import { Stack, Typography, Divider } from "@mui/material";
import { useNavigate } from "react-router";
const AuthorsList = ({ fullName, postNumber, id }) => {
  const navigate = useNavigate();

  const onClickHandler = (id) => {
    navigate(`/authors/${id}`);
  };

  return (
    <Stack
      direction="column"
      sx={{ paddingBottom: 2 }}
      onClick={() => onClickHandler(id)}
    >
      <Typography
        gutterBottom
        variant="h5"
        color="primary"
        sx={{ textDecoration: "underline" }}
      >
        {fullName}
        <span style={{ fontWeight: 700 }}>({postNumber} - posts)</span>
      </Typography>

      <Divider />
    </Stack>
  );
};

export default AuthorsList;
