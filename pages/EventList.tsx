import MiniCards from "@/Components/MiniCards/MiniCards";
import NavBar from "@/Components/NavBar/NavBar";
import { collection, getDocs } from "firebase/firestore";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Button, Card, Container } from "react-bootstrap";
import { app, auth, db } from "../pages/firebase";
import { doc, getDoc } from "firebase/firestore";

export default function EventList() {
  useEffect(() => {
    GetData();
  }, []);
  const [dbData, SetDbData] = useState<any>([]);
  const GetData = async () => {
    const data = await getDocs(collection(db, "EventData")).then((e) => {
      SetDbData(
        e.docs.map((data) => {
          return data.data();
        })
      );
    });
  };
  // const DisplayData = (id, title, description, date) => {
  //   const [data, SetData] = useState({});
  //   SetData({
  //     id: id,
  //     title: title,
  //     description: description,
  //     date: date,
  //   });
  //   return<>
  //   <h2>{data.title}</h2>

  //   </>
  // };
  return (
    <div>
      <NavBar login="Logout" SignUp="Welcome" />
      {/* <Button variant="outline-primary" onClick={GetData}>
        EventData
      </Button>{" "} */}
      <div>
        {/* <h1>Title Date Time Location Description</h1> */}
        {/* {console.log("data is ", dbData[0].date)} */}

        {dbData.map((e: any, i: any) => {
          return (
            <>
              <div>
                <Container>
                  <br />
                  <br />
                  <br />
                  <h1>{e.title[i]}</h1>
                  {/* <Card style={{ width: "18rem" }}>
                  <Card.Body>
                    <Card.Title>{e.title}</Card.Title>
                    <Card.Text>{e.description}</Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card> */}
                  <Card style={{ width: "18rem" }}>
                    <Card.Body>
                      <Card.Title>
                        <Link href="" className="editpof">
                          {e.title}
                        </Link>
                      </Card.Title>
                    </Card.Body>
                  </Card>
                </Container>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}
