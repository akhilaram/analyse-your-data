import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Asset1 from "./pages/Asset1";
import CarbonIntensity from "./pages/CarbonIntensity";
import { Container, Toolbar } from "@mui/material";

const AppRoutes = () => {
  return (
    <>
      <Header />
      <Toolbar />
      <Container fixed role="main">
        <Routes>
          <Route element={<Asset1 />} exact path="/" />
          <Route element={<CarbonIntensity />} exact path="/carbonIntensity" />
        </Routes>
      </Container>
    </>
  );
};

export default AppRoutes;
