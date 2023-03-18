import { Stack, Typography, Divider, Container, Paper } from "@mui/material";

{
  /* <Paper elevation={3} sx={{ paddingLeft: 3, paddingRight: 3 }}> */
}

const SinglePost = () => {
  return (
    <Container maxWidth="lg">
      <Paper elevation={1} sx={{ padding: 3 }}>
        <Stack direction="column" sx={{ marginBottom: 5 }}>
          <Typography
            variant="h5"
            gutterBottom
            color="primary"
            sx={{
              marginBottom: 5,
              textAlign: "center",
              textDecoration: "underline",
            }}
          >
            Author name
          </Typography>
          <Typography variant="h6">
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </Typography>
        </Stack>
        <Divider sx={{ marginBottom: 3 }} />
        <Stack direction="column">
          <Typography
            variant="h6"
            gutterBottom
            sx={{
              fontWeight: 700,
            }}
          >
            3 More posts from the same author
          </Typography>
          <Typography
            variant="h5"
            gutterBottom
            color="primary"
            sx={{ textDecoration: "underline" }}
          >
            Title - Title Placeholder
          </Typography>
          <Typography
            variant="h5"
            gutterBottom
            color="primary"
            sx={{ textDecoration: "underline" }}
          >
            Title - Title Placeholder
          </Typography>
          <Typography
            variant="h5"
            gutterBottom
            color="primary"
            sx={{ textDecoration: "underline" }}
          >
            Title - Title Placeholder
          </Typography>
        </Stack>
      </Paper>
    </Container>
  );
};

export default SinglePost;
