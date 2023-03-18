import {
  Stack,
  Typography,
  CardMedia,
  Card,
  CardContent,
  Divider,
} from "@mui/material";

const SingleAuthorContent = ({
  contentSideRight,
  contentTitle,
  contentFirstParagraph,
  contentSecondParagraph,
  contentThirdParagraph,
  cardImage,
  divider,
}) => {
  console.log(cardImage);

  const switchSides = (
    <CardContent>
      <Typography variant="h4" gutterBottom>
        {contentTitle}
      </Typography>
      <Typography variant="body1" gutterBottom>
        {contentFirstParagraph}
      </Typography>
      <Typography variant="body1" gutterBottom>
        {contentSecondParagraph}
      </Typography>
      <Typography variant="body1" gutterBottom>
        {contentThirdParagraph}
      </Typography>
    </CardContent>
  );

  return (
    <>
      <Stack direction="column" sx={{ paddingBottom: 2, paddingTop: 2 }}>
        <Card elevation={0}>
          <Stack
            direction="row"
            spacing={3}
            sx={{ justifyContent: !contentSideRight && "space-between" }}
          >
            {!contentSideRight && switchSides}
            {cardImage && (
              <CardMedia
                component="img"
                image={cardImage}
                sx={{
                  width: 180,
                  height: 180,
                  padding: 1,
                  boxShadow: "0 0 0 1px black",
                  borderRadius: 2,
                  margin: 1.5,
                }}
                alt="Live from space album cover"
              />
            )}
            {contentSideRight && switchSides}
          </Stack>
        </Card>
      </Stack>
      {divider && <Divider />}
    </>
  );
};

export default SingleAuthorContent;
