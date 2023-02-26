import Carousel from "react-bootstrap/Carousel";
import Image from "next/image";
import { Container } from "react-bootstrap";
function Sliders() {
  return (
    <Carousel>
      <br />
      <Carousel.Item interval={1000}>
        <img className="d-block w-100" src="/event1.webp" alt="First slide" />
        <Carousel.Caption>
          <h3>We Plan Different Ceremonies</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img className="d-block w-100" src="/slider2.jpg" alt="Second slide" />
        <Carousel.Caption>
          <h3>We Plan Programming Seminars</h3>
          <p>Like React Js, FireBase,Next JS, Node Js etc</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Third slide&bg=20232a"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Sliders;
