import { Typography, Stack } from "@mui/material";
import { Container } from "@mui/system";
import { ContentWraper } from "../../components";
const AboutPage = () => {
  return (
    <ContentWraper pageTitle="ABOUT US">
      <Container maxWidth="md">
        <Typography variant="h6" textAlign="center" sx={{ marginBottom: 10 }}>
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not only five centuries,
          but also the leap into electronic typesetting, remaining essentially
          unchanged. It was popularised in the 1960s with the release of
          Letraset sheets containing Lorem Ipsum passages, and more recently
          with desktop publishing software like Aldus PageMaker including
          versions of Lorem Ipsum.
        </Typography>
        <Stack
          direction="column"
          sx={{ justifyContent: "center", alignItems: "center" }}
        >
          <Typography
            gutterBottom
            variant="h4"
            sx={{ fontWeight: 700, marginBottom: 5 }}
          >
            OUR STORY
          </Typography>
        </Stack>
        <Typography variant="h6" textAlign="center">
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not only five centuries,
          but also the leap into electronic typesetting, remaining essentially
          unchanged. It was popularised in the 1960s with the release of
          Letraset sheets containing Lorem Ipsum passages, and more recently
          with desktop publishing software like Aldus PageMaker including
          versions of Lorem Ipsum.
        </Typography>
      </Container>
    </ContentWraper>
  );
};

export default AboutPage;
