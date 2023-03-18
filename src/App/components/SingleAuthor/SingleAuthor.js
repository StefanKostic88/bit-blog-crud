import { Container, Paper } from "@mui/material";

import SingleAuthorContent from "./SingleAuthorContent/SingleAuthorContent";

const SingleAuthor = () => {
  return (
    <Container maxWidth="lg">
      <Paper elevation={1} sx={{ paddingLeft: 3, paddingRight: 3 }}>
        <SingleAuthorContent
          contentSideRight
          contentTitle="Name And Surname"
          contentFirstParagraph="Username: My cool username"
          contentSecondParagraph="Email: nasdnasdnasdn@gmail.com"
          contentThirdParagraph="phone: 064/222-555-66"
          cardImage="https://images.pexels.com/photos/2777898/pexels-photo-2777898.jpeg?auto=compress&cs=tinysrgb&w=1600"
          divider
        />

        <SingleAuthorContent
          contentTitle="Address"
          contentFirstParagraph="Street:Bla bla street"
          contentSecondParagraph="City: New York"
          contentThirdParagraph="zipcode: 77068"
          cardImage="https://images.pexels.com/photos/1078850/pexels-photo-1078850.jpeg?auto=compress&cs=tinysrgb&w=1600"
          divider
        />

        <SingleAuthorContent
          contentTitle="Company"
          contentFirstParagraph="Name: BlaBla"
          contentSecondParagraph="Slogan: 77068"
        />
      </Paper>
    </Container>
  );
};

export default SingleAuthor;
