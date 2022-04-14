import React, { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Car } from "../../components/car";
import { Icar } from "../../typings/cars";
import Carousel, { Dots, slidesToShowPlugin } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import { SCREENS } from "../../responsive";
import { useMediaQuery } from "react-responsive";

const sedan = require("../../assets/images/70s-sedan-thumbnail.jpg");
const benz = require("../../assets/images/amg-benz-thumbnail.jpg");

const TopCarsContainer = styled.div`
  ${tw`flex flex-col items-center justify-center w-full max-w-screen-lg pl-4 pr-4 mb-10 md:pl-0 md:mr-0`}
`;
const Title = styled.h2`
  ${tw`text-3xl font-extrabold text-black underline lg:text-4xl`}
`;
const CarsContainer = styled.div`
  ${tw`flex flex-wrap justify-center w-full mt-7 md:mt-10`}
`;
export default function TopCars() {
  const [current, setCurrent] = useState(0);
  const isMobile = useMediaQuery({ maxWidth: SCREENS.sm });

  const testCar1: Icar = {
    thumbnailSrc: `${sedan}`,
    name: "1963 Sedan",
    gearType: "auto",
    dailyPrice: 70,
    mileage: "10k",
    monthlyPrice: 1600,
    gas: "Petrol",
  };
  const testCar2: Icar = {
    thumbnailSrc: `${benz}`,
    name: "AMV Benz",
    gearType: "auto",
    dailyPrice: 90,
    mileage: "10k",
    monthlyPrice: 2000,
    gas: "Petrol",
  };
  const cars = [
    <Car {...testCar1} />,
    <Car {...testCar2} />,
    <Car {...testCar1} />,
    <Car {...testCar2} />,
    <Car {...testCar1} />,
  ];
  const numberOfDots = isMobile ? cars.length : Math.ceil(cars.length / 3);
  return (
    <TopCarsContainer>
      <Title>Explore our Top Exotic Collections</Title>
      <CarsContainer>
        <Carousel
          value={current}
          onChange={setCurrent}
          slides={cars}
          plugins={[
            "clickToChange",
            {
              resolve: slidesToShowPlugin,
              options: {
                numberOfSlides: 3,
              },
            },
          ]}
          breakpoints={{
            640: {
              plugins: [
                "clickToChange",
                {
                  resolve: slidesToShowPlugin,
                  options: {
                    numberOfSlides: 1,
                  },
                },
              ],
            },
            900: {
              plugins: [
                "clickToChange",
                {
                  resolve: slidesToShowPlugin,
                  options: {
                    numberOfSlides: 2,
                  },
                },
              ],
            },
          }}
        />
        <Dots value={current} onChange={setCurrent} number={numberOfDots} />
      </CarsContainer>
    </TopCarsContainer>
  );
}
