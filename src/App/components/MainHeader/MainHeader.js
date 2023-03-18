import Navigation from "./Navigation/Navigation";
import { useNavigate } from "react-router";

import { AppBar, Toolbar, Stack, Typography, Container } from "@mui/material";
const MainHeader = () => {
  const navigate = useNavigate();
  return (
    <AppBar component="nav">
      <Container maxWidth="lg">
        <Toolbar color="primary">
          <Stack
            direction="row"
            sx={{
              width: "100%",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <Typography
                variant="h4"
                sx={{ cursor: "pointer" }}
                onClick={() => navigate("/")}
              >
                BIT BLOG
              </Typography>
            </div>
            <Navigation />
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default MainHeader;
