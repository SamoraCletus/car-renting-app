import React from "react";
import styled from "styled-components/macro";
import tw from "twin.macro";
import "./App.css";
import { HomePage } from "./containers/HomePage";
import { Route, Routes } from "react-router-dom";
import Body from "./containers/Body/Body";

const AppContainer = styled.div`
  ${tw`w-full h-full`}
`;

function App() {
  return (
    <Routes>
      <Route
        path="/demo"
        element={
          <Body
            comment=""
            firstName=""
            lastName=""
            timestamp={0}
            profilePic=""
            stars={3}
          />
        }
      />
      <Route
        path="/"
        element={
          <AppContainer>
            <HomePage />
          </AppContainer>
        }
      />
    </Routes>
  );
}

export default App;
