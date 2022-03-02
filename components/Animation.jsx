import { useEffect, useRef, useState } from "react";
import anime from "animejs";

const Animation = () => {
  const circles = [...Array(101).keys()];
  const colours = [
    "yellow",
    "powderblue",
    "green",
    "black",
    "#3300CC",
    "#FF0000",
    "#00CC33",
    "#660099",
    "#FF6600",
    "#000033",
    "#990033",
  ];

  const refs = useRef([]);

  const [windowHeight, setWindowHeight] = useState(undefined);
  const [windowWidth, setWindowWidth] = useState(undefined);

  useEffect(() => {
    setWindowHeight(window.innerHeight);
    setWindowWidth(window.innerWidth);
  }, []);

  const animation = () => {
    anime({
      targets: refs.current,
      translateY: () => anime.random(0, windowHeight / 2),
      translateX: () => anime.random(0, windowWidth / 2),
      easing: "easeInOutSine",
      duration: 5000,
      loop: true,
      direction: "alternate",
      complete: animation,
    });
  };

  useEffect(() => {
    animation();
  });

  const getRandomNumber = (min, max) => Math.random() * (max - min) + min;

  const randomTop = () => getRandomNumber(0, windowHeight / 2);
  const randomLeft = () => getRandomNumber(0, windowWidth / 2);

  return circles.map((key, index) => (
    <div
      key={key}
      ref={(el) => (refs.current[index] = el)}
      style={{
        position: "absolute",
        top: `${randomTop()}px`,
        left: `${randomLeft()}px`,
        width: 50,
        height: 50,
        backgroundColor: colours[Math.floor(Math.random() * colours.length)],
        borderRadius: "50%",
        opacity: 0.2,
      }}
    ></div>
  ));
};

export default Animation;
