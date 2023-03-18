import { useNavigate } from "react-router";

import {
  Container,
  TextField,
  Typography,
  Stack,
  TextareaAutosize,
  Button,
  ButtonGroup,
} from "@mui/material";

const CreateNewPost = () => {
  const navigate = useNavigate();

  const createPostHandler = () => {
    const timer = setTimeout(() => {
      navigate("/");
      clearTimeout(timer);
    }, 1500);
  };

  const goBackHandler = () => {
    navigate("/");
  };

  return (
    <Container maxWidth="sm">
      <form>
        <Stack direction="column" sx={{ marginBottom: 5 }}>
          <Typography variant="h5" gutterBottom>
            Title
          </Typography>
          <TextField
            label="Put title"
            size="small"
            required
            color="primary"
            sx={{ minWidth: "100%" }}
          />
        </Stack>
        <Stack direction="column" sx={{ marginBottom: 10 }}>
          <Typography variant="h5" gutterBottom>
            Content
          </Typography>

          <TextareaAutosize
            aria-label="content textarea"
            placeholder="Put content here"
            minRows={5}
            sx={{
              outline: "none",
              border: "none",
              boxShadow: "0 0 0 1px blue",
              background: "red",
              "&:focus": {},
            }}
            color="primary"
          />
        </Stack>
        <Stack direction="column" sx={{ marginBottom: 5 }}>
          <ButtonGroup
            variant="contained"
            disableElevation
            sx={{ gap: 1, marginLeft: "auto" }}
          >
            <Button color="primary" onClick={goBackHandler}>
              Cancle
            </Button>
            <Button color="primary" onClick={createPostHandler}>
              Save
            </Button>
          </ButtonGroup>
        </Stack>
      </form>
    </Container>
  );
};

export default CreateNewPost;
