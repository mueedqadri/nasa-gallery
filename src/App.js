import React from "react";
import Header from "./components/Header";
import List from "./components/List";

import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";

function App() {
  return (
    <div>
      <Header />
      <CssBaseline />
      <Container maxWidth="xl">
        <List />
      </Container>
    </div>
  );
}

export default App;
