import { Button, Col, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { Typewriter } from "react-simple-typewriter";
import Image from "next/image";
const Experience = () => {
  return (
    <>
                <br />
            <br />
      <Container fluid className="ContainerSet Container">
        <Container className="bg-dark">

          <Row>
          <Col md={1}>
          </Col>
            <Col md={5}>
              <br />
              <br />
              <br />
              <p className="TextColor">
                Hi! We Arranges about 1000+ Events{" "}
              </p>{" "}
              <span style={{ color: "green", fontWeight: "bold" }}>
                <Typewriter
                  words={[
                    "With Accuracy",
                    "Great Time Management",
                    "With Discipline",
                    "and Many More",
                  ]}
                  loop={5}
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
              <hr />
              <Button variant="outline-success">Arrange a Event</Button>{" "}
            </Col>
            <Col md={6}>
              <br />
              <Image
                className="img"
                src="/exp2.png"
                alt="This is Portfolio image"
                width={400}
                height={400}
              ></Image>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
};
export default Experience;
