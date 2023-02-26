import React, { useState } from "react";
import NavBar from "@/Components/NavBar/NavBar";
import { Container } from "react-bootstrap";
import { app, auth, db } from "../pages/firebase";
import { collection, addDoc } from "firebase/firestore";
import Link from "next/link";
export default function CreateEvent() {
  const [info, SetInfo] = useState<any>({
    title: "",
    date: "",
    time: "",
    location: "",
    description: "",
  });
  const SubmitHandler = async (e: any) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(db, "EventData"), {
        title: info.title,
        date: info.date,
        time: info.time,
        location: info.location,
        description: info.description,
      });
      alert("Data Sent Successfully!!!!!!!!");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <NavBar login="Logout" SignUp="Welcome" />
      <Container>
        <form action="/create-event" method="POST" onSubmit={SubmitHandler}>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            value={info.title}
            id="title"
            name="title"
            required
            onChange={(e) => SetInfo({ ...info, title: e.target.value })}
          />

          <label htmlFor="date">Date:</label>
          <input
            type="date"
            value={info.date}
            id="date"
            name="date"
            required
            onChange={(e) => SetInfo({ ...info, date: e.target.value })}
          />

          <label htmlFor="time">Time:</label>
          <input
            type="time"
            value={info.time}
            id="time"
            name="time"
            required
            onChange={(e) => SetInfo({ ...info, time: e.target.value })}
          />

          <label htmlFor="location">Location:</label>
          <input
            type="text"
            value={info.location}
            id="location"
            name="location"
            required
            onChange={(e) => SetInfo({ ...info, location: e.target.value })}
          />

          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={info.description}
            name="description"
            required
            onChange={(e) => SetInfo({ ...info, description: e.target.value })}
          ></textarea>

          <button type="submit">Create Event</button>
        </form>
        <button type="submit">
          <Link href="/EventList">See Events</Link>
        </button>
      </Container>
    </div>
  );
}
