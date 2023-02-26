import NavBar from "@/Components/NavBar/NavBar";
import React from "react";
import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Sliders from "@/Components/Sliders/Sliders";
import Experience from "@/Components/Experience/Experience";
import MiniCards from "@/Components/MiniCards/MiniCards";
import { Col, Container, Row } from "react-bootstrap";
import Footer from "@/Components/Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import Router from "next/router";
import { setLogin } from "@/Store/UserSlice";

function SignedDsiplay() {
  return (
    <div>
      <NavBar login="Logout" SignUp="Welcome" />
      <Container className="ContainerSet Container">
        <Container className="ContainerSet Container">
          <br />
          <br />
          <Row>
            <Col md={6}>
              <MiniCards
                title="Creating Events"
                src={"/minicard.svg"}
                detail="Create Your Own Event in Our Website"
                buttoninfo="Create Event"
                hlink={"/CreateEvent"}
              />
            </Col>
            <Col md={6}>
              <MiniCards
                title="Tracking RSVPs"
                src={"/card2.png"}
                detail="Manage Someone Event in Our Website"
                buttoninfo="Manage Event"
                hlink={"/"}
              />
            </Col>
          </Row>
        </Container>
        <hr className="line" />
        <Container className="ContainerSet Container">
          <br />
          <br />
          <Row>
            <Col md={6}>
              <MiniCards
                title="Inviting Attendees"
                src={"/card3.png"}
                detail="Invite Different attendies in your event by posting your event"
                buttoninfo="Invite Attendies"
                hlink={"/"}
              />
            </Col>
            <Col md={6}>
              <MiniCards
                title="Manage Events"
                src={"/card4.jpg"}
                detail="Manage Someone Event in Our Website"
                buttoninfo="Manage Event"
                hlink={"/"}
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}
export default SignedDsiplay;
