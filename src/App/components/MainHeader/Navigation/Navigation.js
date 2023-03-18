import { Stack, ListItem, ListItemText, Typography, List } from "@mui/material";
import { useNavigate } from "react-router";

const pats = [
  { title: "Home", path: "/" },
  { title: "Authors", path: "/authors" },
  { title: "About", path: "/about" },
];

const Navigation = () => {
  const navigate = useNavigate();
  return (
    <List disablePadding>
      <Stack direction="row" spacing={3}>
        {pats.map(({ title, path }) => (
          <ListItem
            sx={{ cursor: "pointer" }}
            key={title}
            disablePadding
            onClick={() => navigate(`${path}`)}
          >
            <ListItemText
              primary={<Typography variant="h6">{title}</Typography>}
            />
          </ListItem>
        ))}
      </Stack>
    </List>
  );
};

export default Navigation;
