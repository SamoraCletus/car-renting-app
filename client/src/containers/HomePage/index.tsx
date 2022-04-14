import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import BookCard from "../../components/bookCard";
import { Footer } from "../../components/footer";
import { Marginer } from "../../components/marginer";
import { Navbar } from "../../components/navbar";
import AboutUs from "./AboutUs";
import BookingSteps from "./Steps";
import TopCars from "./TopCars";
import TopSection from "./TopSection";
const PageContainer = styled.div`
  ${tw`flex flex-col items-center w-full h-full overflow-x-hidden `}
`;

export function HomePage() {
  return (
    <PageContainer>
      <Navbar />
      <TopSection />
      <BookCard />
      <BookingSteps />
      <AboutUs />
      <TopCars />
      <Footer />
    </PageContainer>
  );
}
