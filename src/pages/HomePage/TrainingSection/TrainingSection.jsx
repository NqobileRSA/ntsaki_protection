import React from "react";
import "./TrainingSection.css";
import { CareerCard } from "../../../components/components";
import { aboutInfo } from "../../../constants";
import { Carousel } from "@mantine/carousel";

const TrainingSection = () => {
  return (
    <div id="courses" className="courses ">
      <div className="my-5 container">
        <Carousel
          withIndicators
          // height={200}
          slideSize="30%"
          slideGap="md"
          loop
          align="center"
          slidesToScroll={3}
          data-aos="fade-right">
          {aboutInfo.map((item, index) => (
            <Carousel.Slide key={index}>
              <CareerCard
                title={item.title}
                content={item.content}
                imageSrc={item.imgSrc}
                grades={item.grades}
              />
            </Carousel.Slide>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default TrainingSection;
