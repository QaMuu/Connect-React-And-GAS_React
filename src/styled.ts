import { createTheme } from "@mui/material/styles";
import {
  Paper,
  styled,
} from "@mui/material";

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

export const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  margin: theme.spacing(1),
  padding: theme.spacing(1),
  textAlign: "left",
  color: theme.palette.text.secondary,
}));