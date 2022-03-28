import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Button, Toolbar, Container } from "@mui/material";

const Header = () => {
  return (
    <AppBar>
      <Container fixed>
        <Toolbar>
          <Button color="inherit" component={Link} title="Asset1" to="/">
            Asset1
          </Button>
          <Button
            color="inherit"
            component={Link}
            title="Carbon Intensity"
            to="/carbonIntensity"
          >
            Carbon Intensity
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
