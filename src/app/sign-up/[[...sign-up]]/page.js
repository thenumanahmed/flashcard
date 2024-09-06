import { SignIn, SignUp } from "@clerk/nextjs";
import {
  AppBar,
  Box,
  Button,
  Container,
  Toolbar,
  Typography,
} from "@mui/material";
import Link from "next/link";

export default function signUpPage() {
  return (
    <Container maxWidth="sm">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            {" "}
            FlashCard SaaS
          </Typography>
          <Button color="inherit">
            <Link href="/login" passHref>
              Login
            </Link>
          </Button>
          <Button color="inherit">
            <Link href="/signup" passHref>
              Sign Up
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <Typography variant="h4">Sign Up</Typography>
        <SignUp />
      </Box>
    </Container>
  );
}
