"use client";

import Carousel from "react-bootstrap/Carousel";

const slides = [
  {
    title: "Explore The World With HeHeTour",
    subtitle: "Nikmati liburan impian dengan paket tour terbaik",
    imageUrl: "/images/banner_01.JPG",
  },
  {
    title: "Find Your Next Adventure",
    subtitle: "Temukan destinasi favorit dengan harga terbaik",
    imageUrl: "/images/banner_02.JPG",
  },
  {
    title: "Travel. Discover. Enjoy.",
    subtitle: "HeHeTour - Sahabat perjalanan Anda",
    imageUrl: "/images/banner_03.jpg",
  },
];

export default function HeroSection() {
  return (
    <Carousel fade interval={3500}>
      {slides.map((slide, i) => (
        <Carousel.Item key={i}>
          <div
            style={{
              backgroundImage: `url(${slide.imageUrl})`,
              height: "65vh",
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: "brightness(80%)",
            }}
          ></div>

          <Carousel.Caption>
            <h1 className="fw-bold display-4">{slide.title}</h1>
            <p className="fs-5">{slide.subtitle}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
