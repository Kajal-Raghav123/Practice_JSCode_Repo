import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const SlidingImage = () => {
  const images = [
    {
      id: 1,
      src: "/image1-city.jpg",
      title: "10 Best Cities To Live In India",
      description:
        "India is a land of cultural heritage. Every state and city has its roots in the cultural history of India. In terms of development...",
    },
    {
      id: 2,
      src: "/image2-team.jpg",
      title: "How to stay productive and creative being at home",
      description:
        "Our intentions create our reality; when we change our intentions towards being productive and creative while being at home the reality will be something...",
    },
    {
      id: 3,
      src: "/image3-bride.jpg",
      title: "Big Fat Wedding",
      description:
        "Big Fat weddings, here we will learn about Celebrities and their grand weddings, why they flaunt it? Effect of celebrities Big Fat Wedding on...",
    },
    {
      id: 4,
      src: "/image4-issues.jpg",
      title: "Socio-Cultural Issues In India",
      description:
        "India is a country of a variety of cultures and religions. The integrity through which Indians follow their culture can be rarely seen in...",
    },
    {
      id: 5,
      src: "/image5-sky.jpg",
      title: "The Sky Is The Very Big Place",
      description: "The sky is a very big place. And while we know there...",
    },
    {
      id: 6,
      src: "/image6-beach.jpg",
      title: "Famous Places To Visit In Goa",
      description:
        "Goa is one of the most famous and visited places in India. We know how famous the beaches of Goa are worldwide. Over millions...",
    },
    {
      id: 7,
      src: "/image7.jpg",
      title: "Are We Happier Than Our Forefathers",
      description:
        "Happiness is something which is very difficult to find in today’s busy world. We are so busy in making our careers...",
    },
    {
      id: 8,
      src: "/image8-hc.jpg",
      title: "Why Is Hockey Considered As The National Sport Over Cricket",
      description:
        "Today, cricket is the most popular game in India. The amount of craze audiences have for cricket can’t be compared to any other game...",
    },
    {
      id: 9,
      src: "/image9-smoking.jpg",
      title: "Organisational Profile of ITC",
      description:
        "ITC Limited (Indian Tobacco Company). Here we will read about the company’s History, its overview, Fundamental analysis...",
    },
    {
      id: 10,
      src: "/image10-cricketIPL.jpg",
      title: "Business Model Of IPL",
      description:
        "IPL is considered as one of the biggest festival seasons of India. The excitement level of cricket fans during IPL is always...",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const currentImage = images[currentIndex];

  return (
  <div className="slider-container">
    <div
      className="image-display"
      style={{ backgroundImage: `url(${currentImage.src})` }}
    >
      <div className="image-content">
        <h2>{currentImage.title}</h2>
        <p>{currentImage.description}</p>
        <Link to={`/read/${currentImage.id}`}>
          <button className="read-more">Read More</button>
        </Link>
      </div>
    </div>

    <div className="dots-container">
      {images.map((_, index) => (
        <span
          key={index}
          className={`dot ${index === currentIndex ? "active" : ""}`}
          onClick={() => setCurrentIndex(index)}
        ></span>
      ))}
    </div>
  </div>
);
};

export default SlidingImage;