import { Container, Box, Stack, Typography } from "@mui/material";

import { useNavigate } from "react-router";

const ContentWraper = ({ children, pageTitle, ditailsPage }) => {
  const navigate = useNavigate();

  return (
    <>
      <Box
        sx={(theme) => ({
          marginTop: theme.mixins.toolbar,
          paddingTop: 6,
        })}
      />
      <Container maxWidth="lg">
        <Stack
          direction="column"
          sx={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            gutterBottom
            variant="h4"
            sx={{ fontWeight: 700, marginBottom: 5 }}
          >
            {ditailsPage && (
              <Typography
                variant="body1"
                color="primary"
                sx={{ textDecoration: "underline", cursor: "pointer" }}
                onClick={() => navigate("/authors")}
              >
                All Authors
              </Typography>
            )}
            {pageTitle}
          </Typography>
        </Stack>
        {children}
      </Container>
    </>
  );
};

export default ContentWraper;
